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
		"content": `<style>.rg5pjg-9p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.307 4.055a5.39 5.39 0 0 1 5.386 0l13.234 7.64a5.39 5.39 0 0 1 2.693 4.665v15.282a5.38 5.38 0 0 1-2.693 4.663l-13.234 7.641a5.39 5.39 0 0 1-5.386 0l-13.233-7.64a5.38 5.38 0 0 1-2.694-4.663V16.36a5.39 5.39 0 0 1 2.694-4.665z");
}

.y8pf0d54f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m15.882 17.062l7.136 4.023a2.1 2.1 0 0 0 2.097-.02l7.003-4.126m-8.083 14.123V21.73");
}
</style><path class="rg5pjg-9p"/><path class="y8pf0d54f"/>`,
		"fallback": "arcticons:teamworks",
	});
}

export default Component;
