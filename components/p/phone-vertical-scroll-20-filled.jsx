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
		"content": `<style>.f2bvj1baa {
  fill: currentColor;
  d: path("M5 3.5A1.5 1.5 0 0 1 6.5 2h7A1.5 1.5 0 0 1 15 3.5v13a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 5 16.5zm7.354 5.354a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L10 7.207l1.646 1.647a.5.5 0 0 0 .708 0m-4.708 2.292a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L10 12.793l-1.646-1.647a.5.5 0 0 0-.708 0");
}
</style><path class="f2bvj1baa"/>`,
		"fallback": "fluent:phone-vertical-scroll-20-filled",
	});
}

export default Component;
