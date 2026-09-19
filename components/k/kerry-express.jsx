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
		"content": `<style>.m_jaayc1d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.22 38.9L19.126 22.218L43.5 9.17m-39-.865v31.39m0-9.666l14.687-7.856");
}
</style><path class="m_jaayc1d"/>`,
		"fallback": "arcticons:kerry-express",
	});
}

export default Component;
