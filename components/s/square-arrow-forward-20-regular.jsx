import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.nul0gwb6m {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.6a5.5 5.5 0 0 0-1-.393V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3.207q.149.524.393 1H6a3 3 0 0 1-3-3zm11.5 13a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m.896-6.396l.897.896H14.75A2.75 2.75 0 0 0 12 16.25v.25a.5.5 0 0 0 1 0v-.25c0-.966.784-1.75 1.75-1.75h1.543l-.897.896a.5.5 0 0 0 .708.708l1.752-1.753a.5.5 0 0 0-.002-.705l-1.75-1.75a.5.5 0 0 0-.708.708");
}
</style><path class="nul0gwb6m"/>`,
		"fallback": "fluent:square-arrow-forward-20-regular",
	});
}

export default Component;
