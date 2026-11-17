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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.l4yjpvn8p {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M10 8a2 2 0 0 0-2 2v10H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2Zm5 5h4v3l1 1c.369.369.369 1 0 1h-6c-.369 0-.369-.631 0-1l1-1Z");
}

.suuvw917c {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2m-5 5h4v3l1 1c.369.369.369 1 0 1h-6c-.369 0-.369-.631 0-1l1-1zm-1 0h6m-3 5v3");
}
</style><g class="ft5dv1b6b"><path class="l4yjpvn8p"/><path class="suuvw917c"/></g>`,
		"fallback": "coolicons:note-pin-corner-duotone",
	});
}

export default Component;
