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
		"content": `<style>.yrv8szb8x {
  fill: currentColor;
  d: path("M12 16.423q.262 0 .439-.182t.176-.433t-.177-.434t-.438-.182t-.438.182t-.177.434t.177.433t.438.182m-.5-2.961h1V7.385h-1zM8.673 20L4 15.336V8.673L8.664 4h6.663L20 8.664v6.663L15.336 20zm.427-1h5.8l4.1-4.1V9.1L14.9 5H9.1L5 9.1v5.8zm2.9-7");
}
</style><path class="yrv8szb8x"/>`,
		"fallback": "material-symbols-light:report-outline-sharp",
	});
}

export default Component;
