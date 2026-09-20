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
		"content": `<style>.i2d0c_bnz {
  fill: currentColor;
  d: path("M7.5 18.616h1v-1.424h-1zm0-3.808h1v-3.423h-1zm4 3.808h1v-3.424h-1zm0-5.808h1v-1.423h-1zm4 5.808h1v-1.424h-1zm0-3.808h1v-3.423h-1zM5 21V8.423L10.423 3H19v18z");
}
</style><path class="i2d0c_bnz"/>`,
		"fallback": "material-symbols-light:sim-card-sharp",
	});
}

export default Component;
