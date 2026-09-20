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
		"content": `<style>.owg75wbth {
  fill: currentColor;
  d: path("M11 22v-3.425L5 16.05V11h6V8H8V2h8v6h-3v3h6v5.05l-6 2.525V22zm0-5.6V13H7v1.725zm2 0l4-1.675V13h-4z");
}
</style><path class="owg75wbth"/>`,
		"fallback": "material-symbols:lda-sharp",
	});
}

export default Component;
