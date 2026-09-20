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
		"content": `<style>.dq5olwsrs {
  d: path("m21.5 18.5 -3 3");
}

.htx64eiti {
  d: path("m21.5 5.5 -16 16");
}

.j0xsopbwy {
  d: path("m21.5 12.5 -9 9");
}

.jcnar9-zu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m21.5 18.5 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.q7tcssvtu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m21.5 12.5 -9 9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tr01qf3od {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m21.5 5.5 -16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="tr01qf3od"/><path class="q7tcssvtu"/><path class="jcnar9-zu"/><path class="htx64eiti"/><path class="j0xsopbwy"/><path class="dq5olwsrs"/></g>`,
		"fallback": "iconmind:resize-handle-duotone-bold",
	});
}

export default Component;
