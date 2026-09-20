import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.emf_fqkqo {
  fill: currentColor;
  d: path("M13 12.5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 12.5V8h10zM5.5 9a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m5-8A2.5 2.5 0 0 1 13 3.5V7H3V3.5A2.5 2.5 0 0 1 5.5 1zm-5 2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5");
}
</style><path class="emf_fqkqo"/>`,
		"fallback": "fluent:refrigerator-16-filled",
	});
}

export default Component;
