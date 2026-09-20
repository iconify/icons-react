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
		"content": `<style>.dh-nlhghu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dti01qb8s {
  d: path("M16 9v6");
}

.f26bn-hui {
  d: path("M8 9v6");
}

.j5fopqp8s {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 9v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jiw8u-asa {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kkvfu5bre {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 9v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.l517yxbln {
  d: path("M12 9v6");
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.r3faxubne {
  d: path("M4 4v16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wn9wk7b3u {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M16 9v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="dh-nlhghu"/><path class="jiw8u-asa"/><path class="j5fopqp8s"/><path class="kkvfu5bre"/><path class="wn9wk7b3u"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="f26bn-hui"/><path class="l517yxbln"/><path class="dti01qb8s"/></g>`,
		"fallback": "iconmind:scrape-interval-duotone-bold",
	});
}

export default Component;
