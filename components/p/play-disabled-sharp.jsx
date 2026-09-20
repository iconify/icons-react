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
		"content": `<style>.tmcnvjbeo {
  fill: currentColor;
  d: path("M16.45 13.6L8 5.15V5l11 7zm3.3 9L13 15.8L8 19v-8.2L1.4 4.2l1.4-1.4l18.4 18.4z");
}
</style><path class="tmcnvjbeo"/>`,
		"fallback": "material-symbols:play-disabled-sharp",
	});
}

export default Component;
