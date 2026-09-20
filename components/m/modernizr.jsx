import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":123};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.nw_094q0b {
  fill: var(--svg-color--d91b77, #d91b77);
  d: path("M0 122.88V81.92h40.96V40.96h40.96V0h40.96v122.88zM133.12 0C200.986 0 256 55.016 256 122.879H133.12z");
}
</style><path class="nw_094q0b"/>`,
		"fallback": "logos:modernizr",
	});
}

export default Component;
