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
		"content": `<style>.yhy1nsk7q {
  fill: currentColor;
  d: path("M3 23v-4.15l-2-2V14h6v2.85l-2 2V23zm8 0v-4.15l-2-2V14h6v2.85l-2 2V23zm8 0v-4.15l-2-2V14h6v2.85l-2 2V23zM1 12V6h2V1h2v5h2v6zm8 0V6h2V1h2v5h2v6zm8 0V6h2V1h2v5h2v6z");
}
</style><path class="yhy1nsk7q"/>`,
		"fallback": "material-symbols:settings-input-component-sharp",
	});
}

export default Component;
