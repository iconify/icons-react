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
		"content": `<style>.pcej4ccpd {
  fill: currentColor;
  d: path("M4.116 19.346v-1h3.096l-1.054-1.042q-1.149-1.148-1.673-2.49q-.524-1.341-.524-2.725q0-2.41 1.375-4.361Q6.709 5.777 8.96 4.942v1.062q-1.819.765-2.909 2.424t-1.09 3.66q0 1.222.463 2.37q.463 1.15 1.44 2.127l1.02 1.019v-3.027h1v4.77zm7.345-2.806q-.23-.23-.23-.54t.23-.54t.539-.23t.54.23t.23.54t-.23.54t-.54.23t-.54-.23m.04-3.31V7.5h1v5.73zm3.539 5.828v-1.062q1.819-.765 2.909-2.424t1.09-3.66q0-1.221-.463-2.37t-1.44-2.126l-1.02-1.02v3.027h-1v-4.77h4.77v1h-3.097l1.054 1.043q1.149 1.148 1.673 2.49q.523 1.341.523 2.726q0 2.41-1.374 4.36t-3.626 2.786");
}
</style><path class="pcej4ccpd"/>`,
		"fallback": "material-symbols-light:sync-problem-sharp",
	});
}

export default Component;
