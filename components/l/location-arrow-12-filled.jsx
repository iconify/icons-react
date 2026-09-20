import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ctsho7bqt {
  fill: currentColor;
  d: path("M9.64 1.069c.808-.311 1.603.484 1.292 1.292l-3.076 7.997c-.349.906-1.654.835-1.9-.104l-.803-3.05a.5.5 0 0 0-.357-.356l-3.05-.803c-.938-.247-1.01-1.552-.104-1.9z");
}
</style><path class="ctsho7bqt"/>`,
		"fallback": "fluent:location-arrow-12-filled",
	});
}

export default Component;
