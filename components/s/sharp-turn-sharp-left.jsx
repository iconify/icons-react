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
		"content": `<style>.dvpj29bcp {
  fill: currentColor;
  d: path("M6 6.83L4.41 8.41L3 7l4-4l4 4l-1.41 1.41L8 6.83V13h10v8h-2v-6H6z");
}
</style><path class="dvpj29bcp"/>`,
		"fallback": "ic:sharp-turn-sharp-left",
	});
}

export default Component;
