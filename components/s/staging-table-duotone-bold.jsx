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
		"content": `<style>.e4l4cb81r {
  d: path("M3 4v11h18V4");
}

.ffs26fbkv {
  d: path("M12 17v4");
}

.g6bypobmt {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 17v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hvj-zqk9i {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 4v11h18V4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qrxn8xi7c {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m8 8 4 4 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vnmw_qj9q {
  d: path("m8 8 4 4 4 -4");
}
</style><g class="s0phu2bbs"><path class="hvj-zqk9i"/><path class="g6bypobmt"/><path class="qrxn8xi7c"/><path class="e4l4cb81r"/><path class="ffs26fbkv"/><path class="vnmw_qj9q"/></g>`,
		"fallback": "iconmind:staging-table-duotone-bold",
	});
}

export default Component;
