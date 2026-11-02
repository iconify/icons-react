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
		"content": `<style>.urho3jbau {
  fill: currentColor;
  d: path("M4 3h7v5H3V4a1 1 0 0 1 1-1m9 0h7a1 1 0 0 1 1 1v4h-8ZM3 10h8v4H3Zm18 4h-8v-4h8ZM3 16h8v5H4a1 1 0 0 1-1-1Zm10 5v-5h8v4a1 1 0 0 1-1 1Z");
}
</style><path class="urho3jbau"/>`,
		"fallback": "coolicons:table-fill-sharp",
	});
}

export default Component;
