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
		"content": `<style>.dqgp9vzfn {
  fill: currentColor;
  d: path("M5 21v-2H1V4h22v15h-4v2zm0-6h14l-4.5-6l-3.5 4.5l-2.5-3z");
}
</style><path class="dqgp9vzfn"/>`,
		"fallback": "material-symbols:photo-frame-sharp",
	});
}

export default Component;
