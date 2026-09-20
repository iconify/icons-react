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
		"content": `<style>.xbbr5cb9z {
  fill: currentColor;
  d: path("M14 17v-2h2V3H4v3H2V1h16v6.5l4-4v11l-4-4V17zm-2 3H3.625L0 16.4L1.4 15L3 16.6V8.5h1.5V13h1V7H7v6h1V8h1.5v5h1V9H12zm4-17v12z");
}
</style><path class="xbbr5cb9z"/>`,
		"fallback": "material-symbols:tamper-detection-on-outline-sharp",
	});
}

export default Component;
