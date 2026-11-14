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
		"content": `<style>.gw7ppbjtd {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.25 2.826V2.5q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043Q4.574 1.75 4.5 1.75t-.146.014t-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141q-.014.072-.014.146V5q0-1.837 1.5-2.174m0 11.348V21.5q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014t-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146V7q0 2.25 2.25 2.25h2q.475 0 .85-.1q-.1.375-.1.85v2q0 2.25 2.25 2.25H6q-.413 0-.75-.076m7.75.076h5q2.25 0 2.25-2.25V7q0 2.25-2.25 2.25h-2q-.475 0-.85-.1q.1.375.1.85v2q0 2.25-2.25 2.25m.85-6.4q-.1-.375-.1-.85V5q0-2.25 2.25-2.25H8q2.25 0 2.25 2.25v2q0 .475-.1.85q.375-.1.85-.1h2q.475 0 .85.1");
}
</style><path class="gw7ppbjtd"/>`,
		"fallback": "uix-solid:pin-racetrack",
	});
}

export default Component;
