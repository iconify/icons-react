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
		"content": `<style>.crzn5obfu {
  fill: currentColor;
  d: path("M15 5h5v8l-8 8 -8 -8V5h5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.fxnzc9b-v {
  d: path("M12 9v4");
}

.gcalxb98a {
  d: path("M8 13h8");
}

.pty_wsbvs {
  d: path("M8 9h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ymp2b4b6u {
  d: path("M15 5h5v8l-8 8 -8 -8V5h5");
}
</style><g class="s0phu2bbs"><path class="crzn5obfu"/><path class="ymp2b4b6u"/><path class="pty_wsbvs"/><path class="gcalxb98a"/><path class="fxnzc9b-v"/></g>`,
		"fallback": "iconmind:waf-rule-duotone-bold",
	});
}

export default Component;
