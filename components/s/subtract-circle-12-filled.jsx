import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yzgpkpu7t {
  fill: currentColor;
  d: path("M1 6a5 5 0 1 1 10 0A5 5 0 0 1 1 6m3-.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z");
}
</style><path class="yzgpkpu7t"/>`,
		"fallback": "fluent:subtract-circle-12-filled",
	});
}

export default Component;
