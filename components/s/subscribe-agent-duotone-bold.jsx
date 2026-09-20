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
		"content": `<style>.aj4klekvy {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M13 15a3 3 0 0 1 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jlxwz7w4c {
  fill: currentColor;
  d: path("M12 18a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.jt4-jw3vg {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k5yx_gble {
  d: path("M12 18a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.mdq1vp2qq {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M13 12a6 6 0 0 1 6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mk37pkb8m {
  d: path("M13 15a3 3 0 0 1 3 3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.skbifdbcx {
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
}

.xupj3fbjb {
  d: path("M13 12a6 6 0 0 1 6 6");
}
</style><g class="s0phu2bbs"><path class="jlxwz7w4c"/><path class="jt4-jw3vg"/><path class="aj4klekvy"/><path class="mdq1vp2qq"/><path class="skbifdbcx"/><path class="mk37pkb8m"/><path class="xupj3fbjb"/><path class="k5yx_gble"/></g>`,
		"fallback": "iconmind:subscribe-agent-duotone-bold",
	});
}

export default Component;
