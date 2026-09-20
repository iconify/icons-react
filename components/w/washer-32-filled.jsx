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
		"content": `<style>.t20srnd4d {
  fill: currentColor;
  d: path("M10.5 18.5a5.5 5.5 0 0 1 10.865-1.218c-.264.276-.563.55-1.05.76c-.694.3-1.839.478-3.814-.016c-2.204-.55-3.69-.223-4.728.421a5 5 0 0 0-1.157 1.008l-.028.031a5.5 5.5 0 0 1-.088-.986M7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-17A4.5 4.5 0 0 0 24.5 3zm8.5 8a7.5 7.5 0 1 1 0 15a7.5 7.5 0 0 1 0-15m-4.5-3a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M17 7h5a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2");
}
</style><path class="t20srnd4d"/>`,
		"fallback": "fluent:washer-32-filled",
	});
}

export default Component;
