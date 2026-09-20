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
		"content": `<style>.ce9lljbzb {
  fill: currentColor;
  d: path("M5 5.274c0-1.707 1.826-2.792 3.325-1.977l12.362 6.727c1.566.852 1.566 3.1 0 3.952L8.325 20.702C6.826 21.518 5 20.432 5 18.726z");
}
</style><path class="ce9lljbzb"/>`,
		"fallback": "fluent:play-24-filled",
	});
}

export default Component;
