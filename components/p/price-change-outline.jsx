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
		"content": `<style>.qhs0pebcq {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-2h16V6H4zm0 0V6zm4-1h2v-1h1q.425 0 .713-.288T12 15v-3q0-.425-.288-.712T11 11H8v-1h4V8h-2V7H8v1H7q-.425 0-.712.288T6 9v3q0 .425.288.713T7 13h3v1H6v2h2zm8-.75l2-2h-4zM14 10h4l-2-2z");
}
</style><path class="qhs0pebcq"/>`,
		"fallback": "material-symbols:price-change-outline",
	});
}

export default Component;
