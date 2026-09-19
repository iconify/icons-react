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
		"content": `<style>.r3g500pee {
  fill: currentColor;
  d: path("M12 5H5.82l.78-3.78L5.38 0L0 5.38V14h9.24L12 7.54zm2.76 5L12 16.46V19h6.18l-.78 3.78L18.62 24L24 18.62V10z");
}
</style><path class="r3g500pee"/>`,
		"fallback": "ic:sharp-thumbs-up-down",
	});
}

export default Component;
