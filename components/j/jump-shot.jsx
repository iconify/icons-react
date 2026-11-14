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
		"content": `<style>.rc67pr0vj {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.25 5q0-3.25 3.25-3.25T20.75 5T17.5 8.25q-.664 0-1.192-.136l-2.869 6.148q1.811.963 1.811 3.738v3.5q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014t-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146V18q0-2.75-2.75-2.75H7q-2.75 0-2.75 2.75v3.5q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014t-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146V18q0-4.25 4.25-4.25h4q.529 0 .992.066l3.007-6.445Q14.25 6.56 14.25 5m-8.5 4.5q0 1.347.951 2.299q.952.952 2.299.952t2.299-.952t.951-2.299q.001-1.346-.951-2.299T9 6.249t-2.299.952Q5.75 8.153 5.75 9.5");
}
</style><path class="rc67pr0vj"/>`,
		"fallback": "uix-solid:jump-shot",
	});
}

export default Component;
