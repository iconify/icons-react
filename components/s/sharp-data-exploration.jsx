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
		"content": `<style>.fbxki2bmf {
  fill: currentColor;
  d: path("M12 2C6.48 2 2 6.48 2 12c0 1.33.26 2.61.74 3.77L8 10.5l3.3 2.78L14.58 10H13V8h5v5h-2v-1.58L11.41 16l-3.29-2.79l-4.4 4.4A10 10 0 0 0 12 22h10V12c0-5.52-4.48-10-10-10m7.5 18.5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1");
}
</style><path class="fbxki2bmf"/>`,
		"fallback": "ic:sharp-data-exploration",
	});
}

export default Component;
