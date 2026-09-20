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
		"content": `<style>.c432l7q8b {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 19.5h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hplfm9bcc {
  d: path("M14 16V9l2 -2h4l2 2v7");
}

.ils7yp4cg {
  d: path("M2 16h20");
}

.lp-5xmbze {
  d: path("M2 16V9l2 -2h4l2 2v7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o6obt1bru {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 16V9l2 -2h4l2 2v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qsx9zit8o {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M14 16V9l2 -2h4l2 2v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tg5bh2bez {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 16h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.z0j9wnbwo {
  d: path("M4 19.5h16");
}
</style><g class="nrj6p8qat"><path class="o6obt1bru"/><path class="qsx9zit8o"/><path class="tg5bh2bez"/><path class="c432l7q8b"/><path class="lp-5xmbze"/><path class="hplfm9bcc"/><path class="ils7yp4cg"/><path class="z0j9wnbwo"/></g>`,
		"fallback": "iconmind:tab-group-duotone-regular",
	});
}

export default Component;
