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
		"content": `<style>.ndnyck2mv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.037 20.943l19.417-6.479a4.688 4.688 0 0 1 6.11 3.777c1.003 6.58.71 17.406-10.455 22.081a24.26 24.26 0 0 1-14.582 1.722");
}

.uhhi_-rna {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m31.963 27.057l-19.417 6.479a4.688 4.688 0 0 1-6.11-3.777c-1.003-6.58-.71-17.406 10.455-22.081a24.26 24.26 0 0 1 14.582-1.722");
}
</style><path class="ndnyck2mv"/><path class="uhhi_-rna"/>`,
		"fallback": "arcticons:play-together",
	});
}

export default Component;
