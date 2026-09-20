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
		"content": `<style>.mrtlrnzze {
  fill: currentColor;
  d: path("M8 18q-2.5 0-4.25-1.75T2 12t1.75-4.25T8 6q2.25 0 3.913 1.425T13.925 11H21q.425 0 .713.288T22 12t-.288.713T21 13h-7.075q-.35 2.15-2.013 3.575T8 18");
}
</style><path class="mrtlrnzze"/>`,
		"fallback": "material-symbols:line-start-circle-rounded",
	});
}

export default Component;
