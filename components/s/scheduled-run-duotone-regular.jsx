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
		"content": `<style>.gud1vabey {
  d: path("m10 10 4 4 -4 4Z");
}

.hk697hhuu {
  d: path("M15.38 6.75a8 8 0 1 1 -6.76 0");
}

.jms1xqp8l {
  d: path("M9 3h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y9e33ibiz {
  fill: currentColor;
  d: path("m10 10 4 4 -4 4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yazo7scbq {
  d: path("M12 3v3");
}
</style><g class="nrj6p8qat"><path class="y9e33ibiz"/><path class="hk697hhuu"/><path class="yazo7scbq"/><path class="jms1xqp8l"/><path class="gud1vabey"/></g>`,
		"fallback": "iconmind:scheduled-run-duotone-regular",
	});
}

export default Component;
