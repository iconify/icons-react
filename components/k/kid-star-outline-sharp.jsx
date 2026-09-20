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
		"content": `<style>.es-hj9e0z {
  fill: currentColor;
  d: path("M8.125 7.092L12 1.937l3.875 5.155l6.139 2.07l-3.941 5.336l.156 6.056L12 18.733l-6.229 1.82l.156-6.08l-3.915-5.312zm.629.86l-5.1 1.735l3.292 4.494l-.138 5.006L12 17.697l5.192 1.534l-.138-5.05l3.292-4.444l-5.1-1.785L12 3.616zM12 11.423");
}
</style><path class="es-hj9e0z"/>`,
		"fallback": "material-symbols-light:kid-star-outline-sharp",
	});
}

export default Component;
