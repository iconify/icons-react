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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m2uvji43m {
  fill: currentColor;
  d: path("m12.441 14.393l.139.203a1.5 1.5 0 0 0 .813.591l.237.07a.534.534 0 0 1 .272.838l-.15.196a1.5 1.5 0 0 0-.311.956l.007.246a.534.534 0 0 1-.713.518l-.232-.082a1.5 1.5 0 0 0-1.006 0l-.232.082a.534.534 0 0 1-.713-.518l.007-.246a1.5 1.5 0 0 0-.311-.956l-.15-.196a.534.534 0 0 1 .272-.838l.237-.07a1.5 1.5 0 0 0 .813-.591l.139-.203a.534.534 0 0 1 .882 0");
}

.odh191pzi {
  d: path("m9.5 11.5l4-7c.75-1.25-.25-2.25-1.5-2.25s-2.25 1-1.5 2.25l4 7");
}

.zfq2sfb1m {
  d: path("M6.75 16.25a5.25 5.25 0 1 0 10.5 0a5.25 5.25 0 1 0-10.5 0");
}
</style><g class="hntgybcog"><path class="zfq2sfb1m"/><path class="odh191pzi"/><path class="m2uvji43m"/></g>`,
		"fallback": "uix:survivor",
	});
}

export default Component;
