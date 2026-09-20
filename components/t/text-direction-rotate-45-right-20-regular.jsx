import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b39g33hbv {
  fill: currentColor;
  d: path("M18 8.5a.5.5 0 0 0-1 0v1.794l-3.148-3.148a.5.5 0 1 0-.707.707l3.148 3.148H14.5a.5.5 0 1 0 0 1h3a.5.5 0 0 0 .5-.5zm-5.053-5.777a.5.5 0 0 0-.67-.67l-7.999 4a.5.5 0 0 0 .447.894l2.343-1.172L9.225 7.93l-1.172 2.344a.5.5 0 1 0 .894.447zM9.697 6.99L8.01 5.303l3.37-1.685zM12 14.499a.5.5 0 0 0-1 0v1.794L2.854 8.146a.5.5 0 1 0-.708.707L10.293 17H8.5a.5.5 0 1 0 0 1h3a.5.5 0 0 0 .5-.5z");
}
</style><path class="b39g33hbv"/>`,
		"fallback": "fluent:text-direction-rotate-45-right-20-regular",
	});
}

export default Component;
