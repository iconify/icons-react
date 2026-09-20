import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hnhuhuc2s {
  fill: currentColor;
  d: path("M3.5 13.125c0-.345.243-.625.542-.625h11.916c.3 0 .542.28.542.625v3.75c0 .345-.242.625-.542.625H4.042c-.3 0-.542-.28-.542-.625z");
}
</style><path class="hnhuhuc2s"/>`,
		"fallback": "fluent:text-color-accent-20-filled",
	});
}

export default Component;
