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
		"content": `<style>.j9lrw8tnm {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M20.5 10.75h-6v-6.5q0-1.036-.732-1.768T12 1.75q-2.5 0-2.5 2.5v6.5h-6q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141q-.014.072-.014.146q0 4.39 2.584 7.082Q7.895 21.25 12 21.25t6.666-2.668Q21.25 15.89 21.25 11.5q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014M11 4.25v6.5h2v-6.5q0-.414-.293-.707T12 3.25q-1 0-1 1");
}
</style><path class="j9lrw8tnm"/>`,
		"fallback": "uix-solid:mortar-pestle-lab",
	});
}

export default Component;
