import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qq86web5i {
  fill: currentColor;
  d: path("M6 4.5a.5.5 0 0 1 .5-.5h19a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V5h-8.5v22h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3V5H7v3.5a.5.5 0 0 1-1 0z");
}
</style><path class="qq86web5i"/>`,
		"fallback": "fluent:text-32-light",
	});
}

export default Component;
