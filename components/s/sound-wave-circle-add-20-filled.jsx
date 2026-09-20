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
		"content": `<style>.civvl-bat {
  fill: currentColor;
  d: path("M14.5 10a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9M10 2a8 8 0 0 1 8 8q-.001.126-.007.252A5.48 5.48 0 0 0 14 9.023V7.5a.5.5 0 0 0-1 0v1.708a5.5 5.5 0 0 0-1.5.683V8.5a.5.5 0 0 0-1 0v2.227A5.48 5.48 0 0 0 9 14.5c0 1.326.47 2.543 1.252 3.493Q10.126 18 10 18a8 8 0 1 1 0-16m4.5 10a.5.5 0 0 0-.5.5V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5a.5.5 0 0 0-.5-.5m-6-5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5M6 8.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0V9a.5.5 0 0 0-.5-.5");
}
</style><path class="civvl-bat"/>`,
		"fallback": "fluent:sound-wave-circle-add-20-filled",
	});
}

export default Component;
