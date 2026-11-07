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
		"content": `<style>.ywycj6l7n {
  fill: currentColor;
  d: path("M5 3a1 1 0 0 1 2 0v3h2V3a1 1 0 0 1 2 0v3h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9v3a1 1 0 0 1-2 0v-3H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2Zm16 8a1 1 0 0 1 .857 1.514l-3 5a1 1 0 0 1-1.371.343a1 1 0 0 1-.343-1.371L19.234 13H17a1 1 0 0 1-.857-1.514l3-5a.998.998 0 0 1 1.731.029a1 1 0 0 1-.017.999L18.766 11Z");
}
</style><path class="ywycj6l7n"/>`,
		"fallback": "coolicons:plug-zap-fill-sharp",
	});
}

export default Component;
