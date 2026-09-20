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
		"content": `<style>.ycuge2bgw {
  fill: currentColor;
  d: path("M13 10a1 1 0 0 0-1.787-.617l-.007.009l-.037.045l-.16.187a13.3 13.3 0 0 1-3.023 2.519a1 1 0 0 0 1.029 1.715A15 15 0 0 0 11 12.422V22a1 1 0 1 0 2 0zm4.707 6.293a1 1 0 0 0-1.414 1.414l1.793 1.793l-1.793 1.793a1 1 0 0 0 1.414 1.414l1.793-1.793l1.793 1.793a1 1 0 0 0 1.414-1.414L20.914 19.5l1.793-1.793a1 1 0 0 0-1.414-1.414L19.5 18.086z");
}
</style><path class="ycuge2bgw"/>`,
		"fallback": "fluent:multiplier-1x-32-regular",
	});
}

export default Component;
