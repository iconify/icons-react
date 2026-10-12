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

.lxboc6e8s {
  d: path("m12.64 7.4l7.97 4.95q.64.4-.11.4h-.25q-.75 0-.75.75v7q0 .75-.75.75H5.25q-.75 0-.75-.75v-7q0-.75-.75-.75H3.5q-.75 0-.11-.4l7.97-4.95q.64-.4 1.28 0");
}

.sudf02b4w {
  d: path("M4.5 12.75h15m-10 8.5L12 16l2.5 5.25");
}

.y4wmmobhb {
  d: path("M12 7V2.75h4l-1.25 1.6L16 5.95h-4");
}
</style><g class="hntgybcog"><path class="y4wmmobhb"/><path class="lxboc6e8s"/><path class="sudf02b4w"/></g>`,
		"fallback": "iconoven:marquee-tent",
	});
}

export default Component;
