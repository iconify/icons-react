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
		"content": `<style>.ptoufibxh {
  fill: currentColor;
  d: path("M2 7a1 1 0 0 0 1 1h1v1.5c0 .827.673 1.5 1.5 1.5S7 10.327 7 9.5V8h1a1 1 0 0 0 1-1V6H2zm6.5-6H8v2a.5.5 0 0 1-1 0V1H6v1.5a.5.5 0 0 1-1 0V1H2.5a.5.5 0 0 0-.5.5V5h7V1.5a.5.5 0 0 0-.5-.5");
}
</style><path class="ptoufibxh"/>`,
		"fallback": "fluent:paint-brush-12-filled",
	});
}

export default Component;
