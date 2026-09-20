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
		"content": `<style>.lu9cghddb {
  fill: currentColor;
  d: path("M4 20V5.421L1.887 3.308l.713-.714l19.223 19.223l-.713.714L18.579 20zm4-4h6.579l-1-1H9v-4.579l-1-1zm12 1.208l-4-4V8h-4.471v.737L6.792 4H20zm-5-5l-2.5-2.5V9H15z");
}
</style><path class="lu9cghddb"/>`,
		"fallback": "material-symbols-light:nfc-off-sharp",
	});
}

export default Component;
