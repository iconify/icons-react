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
		"content": `<style>.s7q-rcczj {
  fill: currentColor;
  d: path("m17 14.189l-1-1V6h-2v5.189l-1-1V5H7.85l-1-1H14v1h3zm2.492 6.719L14 15.416V20H4v-1h2V7.416L3.092 4.508L3.8 3.8l16.4 16.4zM7 19h6v-4.584l-6-6zm3-7.584");
}
</style><path class="s7q-rcczj"/>`,
		"fallback": "material-symbols-light:no-meeting-room-outline",
	});
}

export default Component;
