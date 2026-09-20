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
		"content": `<style>.b4de0eyhw {
  d: path("M16 4h4v16h-4");
}

.jiq_guqwb {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m14 10 -4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lxtc-wp5b {
  d: path("m10 10 4 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qbzh-xbpw {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 4H4v16h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qn27zxvzh {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m10 10 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s-cqkabbd {
  d: path("m14 10 -4 4");
}

.uk7acdcay {
  d: path("M8 4H4v16h4");
}

.y49yakb9n {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M16 4h4v16h-4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="qbzh-xbpw"/><path class="y49yakb9n"/><path class="qn27zxvzh"/><path class="jiq_guqwb"/><path class="uk7acdcay"/><path class="b4de0eyhw"/><path class="lxtc-wp5b"/><path class="s-cqkabbd"/></g>`,
		"fallback": "iconmind:socket-close-duotone-regular",
	});
}

export default Component;
