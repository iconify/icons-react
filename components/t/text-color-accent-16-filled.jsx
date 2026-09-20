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
		"content": `<style>.u5i80ht_a {
  fill: currentColor;
  d: path("M2.5 11.167c0-.368.246-.667.55-.667h9.9c.304 0 .55.299.55.667v2.666c0 .368-.246.667-.55.667h-9.9c-.304 0-.55-.299-.55-.667z");
}
</style><path class="u5i80ht_a"/>`,
		"fallback": "fluent:text-color-accent-16-filled",
	});
}

export default Component;
