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
		"content": `<style>.wsd-p9yrc {
  fill: currentColor;
  d: path("M12.007 11.042a4.75 4.75 0 0 1 4.432-3.04h23.807c3.336 0 5.632 3.348 4.431 6.46l-8.684 22.5A4.75 4.75 0 0 1 31.562 40H7.754c-3.335 0-5.632-3.348-4.43-6.46zm4.432-.54a2.25 2.25 0 0 0-2.1 1.44L5.655 34.44a2.25 2.25 0 0 0 2.1 3.06h23.807a2.25 2.25 0 0 0 2.1-1.44l8.683-22.499a2.25 2.25 0 0 0-2.1-3.06z");
}
</style><path class="wsd-p9yrc"/>`,
		"fallback": "fluent:rhombus-48-regular",
	});
}

export default Component;
