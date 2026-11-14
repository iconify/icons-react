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
		"content": `<style>.ktsmsqc6z {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3 7.75q0-4 4-4t4 4t-4 4t-4-4m14-4q-4 0-4 4t4 4t4-4t-4-4M1.75 19.5q0-2.677 1.488-4.451Q4.747 13.25 7 13.25q2.736 0 5 1.974q2.264-1.974 5-1.974q2.253 0 3.762 1.799q1.488 1.774 1.488 4.451q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146q0-4.75-3.75-4.75q-2.439 0-4.47 2.03q-.052.053-.113.094t-.13.069t-.141.043T12 17t-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094Q9.439 14.75 7 14.75q-3.75 0-3.75 4.75q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014t-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146");
}
</style><path class="ktsmsqc6z"/>`,
		"fallback": "uix-solid:people-pair",
	});
}

export default Component;
