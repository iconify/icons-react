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
		"content": `<style>.cd0e-_x5r {
  fill: currentColor;
  d: path("M11 2v5.5h3.5v3.31C14.55 9.8 15.64 9 16.99 9c1.38 0 2.5.84 2.5 1.88H14.5v3.56c.76.36 1.61.56 2.5.56c3.31 0 6-2.69 6-6V2zm4 5.5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m4 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1");
}

.xrjr-mlhk {
  fill: currentColor;
  d: path("M1 16c0 3.31 2.69 6 6 6s6-2.69 6-6V9H1zm6 1.88c-1.38 0-2.5-.84-2.5-1.88h5c0 1.04-1.12 1.88-2.5 1.88m2-5.38c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m-4 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1");
}
</style><path class="cd0e-_x5r"/><path class="xrjr-mlhk"/>`,
		"fallback": "ic:sharp-theater-comedy",
	});
}

export default Component;
