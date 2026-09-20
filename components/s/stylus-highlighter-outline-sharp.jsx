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
		"content": `<style>.g201h1q2t {
  fill: currentColor;
  d: path("M7.673 15.308V4h1.994l6.64 3.244v8.064zm1-1h6.635v-6.43L9.442 5h-.769zM5 20l.827-2.308h12.346L19 20zm3.673-5.692h6.635z");
}
</style><path class="g201h1q2t"/>`,
		"fallback": "material-symbols-light:stylus-highlighter-outline-sharp",
	});
}

export default Component;
