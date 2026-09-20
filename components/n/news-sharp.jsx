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
		"content": `<style>.fynhpk7ir {
  fill: currentColor;
  d: path("M4 20V4h11.577L20 8.423V20zM15 5v4h4zM7.5 16h9v-1h-9zm0-7H12V8H7.5zm0 3.5h9v-1h-9z");
}
</style><path class="fynhpk7ir"/>`,
		"fallback": "material-symbols-light:news-sharp",
	});
}

export default Component;
