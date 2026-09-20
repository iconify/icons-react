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
		"content": `<style>.c1czy_9xl {
  d: path("M9.136 21L5.7 17.625V14.25h9.164V3L18.3 6.375v11.25H9.136z");
}

.ia1c-wqff {
  fill: var(--svg-color--9601d9, #9601d9);
}

.zwce0gsxs {
  d: path("M10.282 5.25H5.7v4.5h4.582z");
}
</style><g class="ia1c-wqff"><path class="c1czy_9xl"/><path class="zwce0gsxs"/></g>`,
		"fallback": "token-branded:pillar",
	});
}

export default Component;
