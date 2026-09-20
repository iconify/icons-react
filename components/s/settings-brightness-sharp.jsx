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
		"content": `<style>.s78tw5-tw {
  fill: currentColor;
  d: path("M12 16.077L13.077 15H15v-1.923L16.077 12L15 10.923V9h-1.923L12 7.923L10.923 9H9v1.923L7.923 12L9 13.077V15h1.923zm0-1.577v-5q1.039 0 1.77.729t.73 1.769t-.73 1.771q-.728.731-1.77.731M3 19V5h18v14z");
}
</style><path class="s78tw5-tw"/>`,
		"fallback": "material-symbols-light:settings-brightness-sharp",
	});
}

export default Component;
