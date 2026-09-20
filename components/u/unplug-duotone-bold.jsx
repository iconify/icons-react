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
		"content": `<style>.jnf_2db5t {
  d: path("M12 18v3");
}

.li_ylqjgz {
  fill: currentColor;
  d: path("M6 7h12v5l-6 6 -6 -6Z");
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

.smxtbacxz {
  d: path("M9 3v4");
}

.u85q0ssbo {
  d: path("M6 7h12v5l-6 6 -6 -6Z");
}

.wubtydbvb {
  d: path("M15 3v4");
}
</style><g class="s0phu2bbs"><path class="li_ylqjgz"/><path class="smxtbacxz"/><path class="wubtydbvb"/><path class="u85q0ssbo"/><path class="jnf_2db5t"/></g>`,
		"fallback": "iconmind:unplug-duotone-bold",
	});
}

export default Component;
