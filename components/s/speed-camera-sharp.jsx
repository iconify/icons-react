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
		"content": `<style>.le7qv29ig {
  fill: currentColor;
  d: path("m17.467 14.27l-1.213-.693l2.558-1.87L20 12.4zM5 19v-1h4.808v-6.22l-4.38-2.436l2.866-4.857l10.27 5.692l-5.043 3.665l-2.733-1.503V19z");
}
</style><path class="le7qv29ig"/>`,
		"fallback": "material-symbols-light:speed-camera-sharp",
	});
}

export default Component;
