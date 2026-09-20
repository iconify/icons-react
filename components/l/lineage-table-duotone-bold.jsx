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
		"content": `<style>.dmqg6xbxr {
  d: path("M2 16a2 2 0 0 1 2 -2h2.5a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.f_uflo3mp {
  fill: currentColor;
  d: path("M13.5 10.5a2 2 0 0 1 2 -2H20a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-4.5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.fa9joccbo {
  d: path("M2 5a2 2 0 0 1 2 -2h2.5a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.hjz9frcqe {
  d: path("M8.5 17.5H11V12");
}

.pwc0rzflc {
  d: path("M13.5 10.5a2 2 0 0 1 2 -2H20a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-4.5a2 2 0 0 1 -2 -2Z");
}

.rhtl3vb5u {
  d: path("M8.5 6.5H11V12h2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sgre8wn0t {
  fill: currentColor;
  d: path("M2 5a2 2 0 0 1 2 -2h2.5a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wc3m1834b {
  fill: currentColor;
  d: path("M2 16a2 2 0 0 1 2 -2h2.5a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="sgre8wn0t"/><path class="wc3m1834b"/><path class="f_uflo3mp"/><path class="fa9joccbo"/><path class="dmqg6xbxr"/><path class="pwc0rzflc"/><path class="rhtl3vb5u"/><path class="hjz9frcqe"/></g>`,
		"fallback": "iconmind:lineage-table-duotone-bold",
	});
}

export default Component;
