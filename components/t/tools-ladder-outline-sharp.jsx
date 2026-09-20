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
		"content": `<style>.r-51stbfo {
  fill: currentColor;
  d: path("m5.873 20.5l4.73-17h.943l-.83 3h5.605l.844-3h.962l-4.73 17h-.943l.83-3H7.68l-.845 3zm3.468-9h5.6l1.113-4h-5.62zm-1.395 5h5.62l1.093-4h-5.6z");
}
</style><path class="r-51stbfo"/>`,
		"fallback": "material-symbols-light:tools-ladder-outline-sharp",
	});
}

export default Component;
