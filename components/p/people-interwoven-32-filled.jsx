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
		"content": `<style>.sxpj6ebcc {
  fill: currentColor;
  d: path("M8.813 14.424c3.007 0 4.915 2.692 7.271 3.652c.326.133.479.538.278.827l-5.625 8.11a2.3 2.3 0 0 1-3.669.146l-4.721-5.764a.97.97 0 0 1-.109-1.08c1.335-2.413 3.91-5.891 6.575-5.891m12.382.974a2.3 2.3 0 0 1 3.67-.146l4.721 5.765c.251.306.3.733.108 1.08c-1.334 2.412-3.91 5.89-6.574 5.89c-3.007 0-4.916-2.692-7.271-3.652c-.326-.133-.48-.538-.279-.827zM9.5 3a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m13 0a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9");
}
</style><path class="sxpj6ebcc"/>`,
		"fallback": "fluent:people-interwoven-32-filled",
	});
}

export default Component;
