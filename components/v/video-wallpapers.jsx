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
		"content": `<style>.c-c3f6bbj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.5 5.5h-18a2 2 0 0 0-2 2v33a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-33a2 2 0 0 0-2-2m-20 34h-5c-1.1 0-2-.9-2-2v-27c0-1.1.9-2 2-2h5m22 0h6c1.1 0 2 .9 2 2v27c0 1.1-.9 2-2 2h-6");
}

.idm4svlov {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.5 18.03l9 6l-9 5.97V18z");
}
</style><path class="c-c3f6bbj"/><path class="idm4svlov"/>`,
		"fallback": "arcticons:video-wallpapers",
	});
}

export default Component;
