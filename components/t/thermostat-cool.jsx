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
		"content": `<style>.y55j_i_ae {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.551 19.782a9.5 9.5 0 1 1 10.898 0M12 2.5v2.75M12 8v8m3.464-6l-6.928 4m6.928 0l-6.928-4");
}
</style><path class="y55j_i_ae"/>`,
		"fallback": "uix-sharp:thermostat-cool",
	});
}

export default Component;
