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
		"content": `<style>.a8ujocbwb {
  fill: currentColor;
  d: path("M6 13h14v4H6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.eq1ozwbjq {
  d: path("M3 21h14");
}

.fqbma974b {
  d: path("M6 13h14v4H6Z");
}

.odjrxobua {
  fill: currentColor;
  d: path("M3 6h14v4H3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u1nlm01-r {
  d: path("M3 6h14v4H3Z");
}
</style><g class="s0phu2bbs"><path class="odjrxobua"/><path class="a8ujocbwb"/><path class="u1nlm01-r"/><path class="fqbma974b"/><path class="eq1ozwbjq"/></g>`,
		"fallback": "iconmind:to-read-list-duotone-bold",
	});
}

export default Component;
