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
		"content": `<style>.hs3dvpb0f {
  fill: currentColor;
  d: path("M7.25 6c.69 0 1.25.56 1.25 1.25v33.5a1.25 1.25 0 1 1-2.5 0V7.25C6 6.56 6.56 6 7.25 6M42 9.256c0-2.615-2.93-4.16-5.088-2.68L15.408 21.318c-1.883 1.29-1.883 4.07 0 5.36l21.504 14.744C39.07 42.9 42 41.357 42 38.743z");
}
</style><path class="hs3dvpb0f"/>`,
		"fallback": "fluent:previous-48-filled",
	});
}

export default Component;
