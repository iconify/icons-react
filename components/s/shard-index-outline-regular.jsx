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
		"content": `<style>.b7nacdcee {
  d: path("M3 6h6");
}

.czv374byt {
  d: path("M10 16h11");
}

.f8c172gmh {
  d: path("M12 6h9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qnmmmsbha {
  d: path("M3 11h11");
}

.tk_gkbbsy {
  d: path("M3 16h4");
}

.zhf4ld96p {
  d: path("M17 11h4");
}
</style><g class="nrj6p8qat"><path class="b7nacdcee"/><path class="f8c172gmh"/><path class="qnmmmsbha"/><path class="zhf4ld96p"/><path class="tk_gkbbsy"/><path class="czv374byt"/></g>`,
		"fallback": "iconmind:shard-index-outline-regular",
	});
}

export default Component;
