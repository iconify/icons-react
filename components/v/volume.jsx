import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.z71q-0lcy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.017 16.708c1.768 1.326 3.241 4.714 2.946 8.397c-.294 2.799-1.767 5.156-2.946 6.04M5.5 17.74v12.816h8.544l11.049 8.839V8.605L14.044 17.74zm31.673-6.777c3.094 2.357 5.598 8.397 5.303 15.026c-.442 5.009-2.946 9.133-5.303 10.901");
}
</style><path class="z71q-0lcy"/>`,
		"fallback": "arcticons:volume",
	});
}

export default Component;
