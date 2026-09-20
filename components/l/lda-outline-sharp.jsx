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
		"content": `<style>.q87z5sbju {
  fill: currentColor;
  d: path("M11 22v-3.425L5 16.05V11h6V8H8V2h8v6h-3v3h6v5.05l-6 2.525V22zM10 6h4V4h-4zm1 10.4V13H7v1.725zm2 0l4-1.675V13h-4zM10 6V4z");
}
</style><path class="q87z5sbju"/>`,
		"fallback": "material-symbols:lda-outline-sharp",
	});
}

export default Component;
