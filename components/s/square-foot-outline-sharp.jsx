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
		"content": `<style>.lyicr-b7n {
  fill: currentColor;
  d: path("M3 21V2.45l4.1 4.1L5.75 7.9l.7.7L7.8 7.25l2.6 2.6l-1.35 1.35l.7.7l1.35-1.35l2.6 2.6l-1.35 1.35l.7.7l1.35-1.35l2.6 2.6l-1.35 1.35l.7.7l1.35-1.35L21.55 21zm3-3h8.3L6 9.7z");
}
</style><path class="lyicr-b7n"/>`,
		"fallback": "material-symbols:square-foot-outline-sharp",
	});
}

export default Component;
