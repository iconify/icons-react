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
		"content": `<style>.qc1dwc9vi {
  fill: currentColor;
  d: path("M7.675 16h8.65L18.5 7L13 1.925V7.3q.35.25.55.625t.2.825q0 .725-.513 1.238T12 10.5t-1.237-.513t-.513-1.237q0-.45.2-.825T11 7.3V1.925L5.5 7zM4 21l1-3h14l1 3z");
}
</style><path class="qc1dwc9vi"/>`,
		"fallback": "material-symbols:stylus-fountain-pen-sharp",
	});
}

export default Component;
