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
		"content": `<style>.g4i64wb0w {
  fill: currentColor;
  d: path("M22 2H2v20h20zM12 18c-2.64 0-5.13-1.03-7-2.9l1.06-1.06c.34.34.71.65 1.1.92L8 13.5V9.51l-1.55.99l-.95-1L7 7.76L6 7h3.65l1.73 3H17v1h-1v2.5l.84 1.46c.39-.28.76-.58 1.1-.92L19 15.1a9.84 9.84 0 0 1-7 2.9");
}

.gli2nyrlw {
  fill: currentColor;
  d: path("M14.69 14.24a7.72 7.72 0 0 1-5.4 0l-.81 1.41l-.03.06c1.1.52 2.28.79 3.53.79s2.45-.28 3.55-.79l-.03-.06z");
}
</style><path class="g4i64wb0w"/><path class="gli2nyrlw"/>`,
		"fallback": "ic:sharp-bedroom-baby",
	});
}

export default Component;
