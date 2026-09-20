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
		"content": `<style>.l781zc_iy {
  fill: currentColor;
  d: path("M7.673 15.308V4h1.994l6.64 3.244v8.064zM5 20l.827-2.308h12.346L19 20z");
}
</style><path class="l781zc_iy"/>`,
		"fallback": "material-symbols-light:stylus-highlighter-sharp",
	});
}

export default Component;
