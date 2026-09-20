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
		"content": `<style>.t1mt2acmy {
  fill: currentColor;
  d: path("M2 22V6h6l4-4l4 4h6v16zm2-2h16V8H4zm2-2h12l-3.75-5l-3 4L9 14zm12.563-5.437Q19 12.125 19 11.5t-.437-1.062T17.5 10t-1.062.438T16 11.5t.438 1.063T17.5 13t1.063-.437M10.1 6h3.8L12 4.1zM4 20V8z");
}
</style><path class="t1mt2acmy"/>`,
		"fallback": "material-symbols:wall-art-outline-sharp",
	});
}

export default Component;
