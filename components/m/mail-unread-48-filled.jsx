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
		"content": `<style>.rynfl2bqz {
  fill: currentColor;
  d: path("M41 16a5 5 0 1 0 0-10a5 5 0 0 0 0 10M10.25 9h23.002A8 8 0 0 0 33 11a7.99 7.99 0 0 0 3.331 6.497L24 24.325L5.018 13.814A5.25 5.25 0 0 1 10.25 9m14.352 18.347l15.394-8.41a8.1 8.1 0 0 0 3.004-.19V33.75c0 2.9-2.35 5.25-5.25 5.25h-27.5A5.25 5.25 0 0 1 5 33.75V17.296l18.398 10.051l.127.061a1.25 1.25 0 0 0 1.077-.06");
}
</style><path class="rynfl2bqz"/>`,
		"fallback": "fluent:mail-unread-48-filled",
	});
}

export default Component;
