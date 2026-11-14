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
		"content": `<style>.p-h-mabwf {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M21.5 11.25h-6.25V6.5q0-3.25-3.25-3.25T8.75 6.5v4.75H2.5q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141q-.014.072-.014.146v5q0 .128.042.248q.043.121.122.221l2 2.5q.053.065.119.118t.142.089t.158.055t.167.019h15q.084 0 .167-.019q.082-.018.158-.055t.142-.089q.066-.053.119-.118l2-2.5q.079-.1.122-.221q.042-.12.042-.248v-5q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014M10.25 6.5v4.75h3.5V6.5q0-1.75-1.75-1.75T10.25 6.5");
}
</style><path class="p-h-mabwf"/>`,
		"fallback": "uix-solid:wax-scraper",
	});
}

export default Component;
