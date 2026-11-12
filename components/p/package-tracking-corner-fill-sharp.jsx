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
		"content": `<style>.j9cx9-bdg {
  fill: currentColor;
  d: path("M5.106 3.553A1 1 0 0 1 6 3h12c.379 0 .725.214.894.553l2 4A1 1 0 0 1 20 9H5v10h3a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1V8c0-.155.036-.308.106-.447Zm9.707 16.658a33 33 0 0 1-1.322-1.435C12.878 18.061 12 16.985 12 16a5 5 0 0 1 10 0c0 .985-.878 2.061-1.491 2.776q-.64.737-1.322 1.435c-.488.504-.984 1-1.48 1.496a1 1 0 0 1-1.414 0c-.496-.496-.992-.992-1.48-1.496M16 16a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><path class="j9cx9-bdg"/>`,
		"fallback": "coolicons:package-tracking-corner-fill-sharp",
	});
}

export default Component;
