import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v8d400w_d {
  fill: currentColor;
  d: path("M5.75 4A3.75 3.75 0 0 0 2 7.75v12.5A3.75 3.75 0 0 0 5.75 24h16.5A3.75 3.75 0 0 0 26 20.25V7.75A3.75 3.75 0 0 0 22.25 4zM10 10.251a1 1 0 0 1 1.472-.881l7 3.75a1 1 0 0 1 0 1.763l-7 3.75A1 1 0 0 1 10 17.75z");
}
</style><path class="v8d400w_d"/>`,
		"fallback": "fluent:video-clip-28-filled",
	});
}

export default Component;
