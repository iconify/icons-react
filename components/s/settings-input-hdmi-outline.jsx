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
		"content": `<style>.qtbad4qaf {
  fill: currentColor;
  d: path("M8 22v-3l-3-6V7h1V4q0-.825.588-1.412T8 2h8q.825 0 1.413.588T18 4v3h1v6l-3 6v3zM8 7h2V5h1v2h2V5h1v2h2V4H8zm2 13h4v-1.5l3-6V9H7v3.5l3 6zm2-7.5");
}
</style><path class="qtbad4qaf"/>`,
		"fallback": "material-symbols:settings-input-hdmi-outline",
	});
}

export default Component;
