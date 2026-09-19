import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.aoytnkb_p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5h18.555v18.555h0H5.5h0zm18.555 0v18.555h9.83a8.597 8.597 0 0 0 8.615-8.616v-1.322A8.597 8.597 0 0 0 33.885 5.5Z");
}

.nsggzmbnu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 24.055v9.83a8.597 8.597 0 0 0 8.616 8.615h1.322a8.597 8.597 0 0 0 8.616-8.615v-9.83Z");
}
</style><path class="aoytnkb_p"/><path class="nsggzmbnu"/>`,
		"fallback": "arcticons:photopills",
	});
}

export default Component;
