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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.kndjod88j {
  d: path("M13.237 3.273a1.75 1.75 0 0 0-2.475 0l-3.71 3.711a6.999 6.999 0 0 0 4.198 11.908v2.358a.75.75 0 0 0 1.5 0v-2.358a6.999 6.999 0 0 0 4.199-11.907l-3.712-3.712zM12.75 17.38V11.75a.75.75 0 0 0-1.5 0v5.63a5.499 5.499 0 0 1-3.138-9.336l3.711-3.71a.25.25 0 0 1 .354 0l3.711 3.71a5.499 5.499 0 0 1-3.138 9.337z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="kndjod88j"/></g>`,
		"fallback": "fluent:leaf-24-regular",
	});
}

export default Component;
