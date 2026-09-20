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
		"content": `<style>.m44-u1z7m {
  fill: currentColor;
  d: path("M5.2 21q-.925 0-1.562-.638T3 18.8V5.1q0-.725.675-1.012T4.85 4.3L7.1 6.55L5.75 7.9l.7.7L7.8 7.25l2.6 2.6l-1.35 1.35l.7.7l1.35-1.35l2.6 2.6l-1.35 1.35l.7.7l1.35-1.35l2.6 2.6l-1.35 1.35l.7.7l1.35-1.35l2 2q.5.5.213 1.175T18.9 21zm.8-3h8.3L6 9.7z");
}
</style><path class="m44-u1z7m"/>`,
		"fallback": "material-symbols:square-foot",
	});
}

export default Component;
