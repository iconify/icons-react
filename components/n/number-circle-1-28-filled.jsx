import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.nt7_mab2i {
  fill: currentColor;
  d: path("M2 14C2 7.373 7.373 2 14 2s12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14m13.5-5.75a.75.75 0 0 0-1.474-.199l-.004.014l-.022.069c-.02.063-.055.16-.105.282c-.1.245-.26.587-.499.966c-.477.758-1.251 1.638-2.456 2.185a.75.75 0 0 0 .62 1.366A7 7 0 0 0 14 11.087v8.163a.75.75 0 0 0 1.5 0zm-1.474-.199");
}
</style><path class="nt7_mab2i"/>`,
		"fallback": "fluent:number-circle-1-28-filled",
	});
}

export default Component;
