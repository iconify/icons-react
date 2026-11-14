import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.nkl4c9xat {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.75 12q0-4.246 3.002-7.248T12 1.75t7.248 3.002T22.25 12t-3.002 7.248T12 22.25t-7.248-3.002T1.75 12m8 6v-5.75H16q.13 0 .252-.044q.122-.043.223-.126q.115-.094.186-.225q.07-.132.085-.28t-.028-.292q-.043-.142-.138-.258L14.719 8.75l1.861-2.275q.083-.101.126-.223q.044-.122.044-.252q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13q-.041-.061-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043T16 5.25H9q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141T8.25 6v12q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141T9.75 18m0-7.25h4.667L13.17 9.225q-.041-.05-.073-.106t-.053-.117t-.033-.124Q13 8.814 13 8.75t.011-.128t.033-.124q.021-.061.053-.117t.073-.106l1.247-1.525H9.75z");
}
</style><path class="nkl4c9xat"/>`,
		"fallback": "uix-solid:issue-milestone",
	});
}

export default Component;
