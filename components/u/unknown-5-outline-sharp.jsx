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
		"content": `<style>.ibckrkbhn {
  fill: currentColor;
  d: path("M5 12v-1h7v1zm7 9q-1.789 0-3.434-.67t-2.935-1.96l.707-.708q1.175 1.1 2.631 1.719T12 20q3.325 0 5.663-2.337T20 12t-2.337-5.663T12 4V3q1.864 0 3.503.71q1.64.711 2.858 1.93t1.929 2.857q.71 1.64.71 3.5t-.71 3.503q-.711 1.642-1.93 2.86t-2.857 1.93T12 21");
}
</style><path class="ibckrkbhn"/>`,
		"fallback": "material-symbols-light:unknown-5-outline-sharp",
	});
}

export default Component;
