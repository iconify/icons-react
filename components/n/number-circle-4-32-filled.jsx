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
		"content": `<style>.pgoxx1bow {
  fill: currentColor;
  d: path("M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16m16.998-6.179c0-1.385-1.797-1.929-2.565-.776l-5.954 8.934A1.3 1.3 0 0 0 11.56 20h5.437v2a1 1 0 1 0 2 0v-2h1a1 1 0 1 0 0-2h-1zm-2 1.983V18h-4.13z");
}
</style><path class="pgoxx1bow"/>`,
		"fallback": "fluent:number-circle-4-32-filled",
	});
}

export default Component;
