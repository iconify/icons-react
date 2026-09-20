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
		"content": `<style>.sg6xyacos {
  fill: currentColor;
  d: path("M9.575 13L12 17.25q.2.35-.075.613t-.625.062L3.325 12.85q-.475-.3-.475-.85t.475-.85L11.3 6.075q.35-.2.625.063T12 6.75L9.575 11H21q.425 0 .713.288T22 12t-.288.713T21 13z");
}
</style><path class="sg6xyacos"/>`,
		"fallback": "material-symbols:line-start-arrow-notch-outline-rounded",
	});
}

export default Component;
