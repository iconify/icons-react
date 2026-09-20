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
		"content": `<style>.vr540ibpf {
  fill: currentColor;
  d: path("M15 29a1 1 0 1 0 2 0V3a1 1 0 1 0-2 0zm11.5-3h-8V6h8A3.5 3.5 0 0 1 30 9.5v13a3.5 3.5 0 0 1-3.5 3.5m-13-20h-8A3.5 3.5 0 0 0 2 9.5v13A3.5 3.5 0 0 0 5.5 26h8z");
}
</style><path class="vr540ibpf"/>`,
		"fallback": "fluent:split-vertical-32-filled",
	});
}

export default Component;
