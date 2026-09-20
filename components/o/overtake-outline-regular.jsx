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
		"content": `<style>.beunabbsv {
  d: path("M12.5 6.5 15 4l2.5 2.5");
}

.caiwqabfd {
  d: path("M6.5 10.5 9 8l2.5 2.5");
}

.hcn-wubvk {
  d: path("M3 2v20");
}

.ler50rfbf {
  d: path("M9 8v12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qw9zcf0wd {
  d: path("M15 4v12");
}

.toy0nxbdm {
  d: path("M21 2v20");
}
</style><g class="nrj6p8qat"><path class="hcn-wubvk"/><path class="toy0nxbdm"/><path class="ler50rfbf"/><path class="caiwqabfd"/><path class="qw9zcf0wd"/><path class="beunabbsv"/></g>`,
		"fallback": "iconmind:overtake-outline-regular",
	});
}

export default Component;
