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
		"content": `<style>.c7v45dy1s {
  cx: 24px;
  cy: 23.999px;
  r: 9.406px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.rsby0-u3v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.488 42.172c-9.271 5.86-21.467 3.803-28.302-4.774S1.068 16.472 8.85 8.744C16.633 1.016 28.985.384 37.515 7.28s10.502 19.106 4.576 28.335");
}
</style><path class="rsby0-u3v"/><circle transform="rotate(-.71 24 23.999)" class="c7v45dy1s"/>`,
		"fallback": "arcticons:refind",
	});
}

export default Component;
