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
		"content": `<style>.rjs48hban {
  fill: currentColor;
  d: path("M4 21h2v-4h12v4h2v-6H4zM17 5c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v9h10zm-2 7H9V5h6zm4-2h3v3h-3zM2 10h3v3H2z");
}

.u1s3irxhf {
  fill: currentColor;
  d: path("M9 5h6v7H9z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="u1s3irxhf"/><path class="rjs48hban"/>`,
		"fallback": "ic:twotone-event-seat",
	});
}

export default Component;
