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
		"content": `<style>.ace43_z9k {
  fill: currentColor;
  d: path("M5 8v13h17V8zm15 4l-6.5 3.33L7 12v-2l6.5 3.33L20 10z");
}

.p38pe2b5j {
  fill: currentColor;
  d: path("M16.23 7h4.12L10.5 2L2 6.21V17h2V7.4L10.5 4z");
}
</style><path class="p38pe2b5j"/><path class="ace43_z9k"/>`,
		"fallback": "ic:sharp-mark-as-unread",
	});
}

export default Component;
