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
		"content": `<style>.koxn03bip {
  fill: currentColor;
  d: path("M5 23V1h14v7h-8v13h2.825l2-2H19v4zm8-4v-9h9v7h-7zm-.288-13.288Q13 5.425 13 5t-.288-.712T12 4t-.712.288T11 5t.288.713T12 6t.713-.288");
}
</style><path class="koxn03bip"/>`,
		"fallback": "material-symbols:mobile-chat-sharp",
	});
}

export default Component;
