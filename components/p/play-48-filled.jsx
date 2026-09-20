import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rpt8f-bii {
  fill: currentColor;
  d: path("m16.75 8.412l24.417 12.705a3.25 3.25 0 0 1 0 5.766L16.75 39.588A3.25 3.25 0 0 1 12 36.705v-25.41a3.25 3.25 0 0 1 4.549-2.98z");
}
</style><path class="rpt8f-bii"/>`,
		"fallback": "fluent:play-48-filled",
	});
}

export default Component;
