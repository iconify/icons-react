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
		"content": `<style>.l3yfxqhfq {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.0422 21.7127L8.6146 3.138C8.9953 1.869 10.1633 1 11.4881 1L12.5119 1C13.8367 1 15.0047 1.869 15.3854 3.138L20.9578 21.7127C20.9858 21.8059 21 21.9027 21 22C21 22.5523 20.5523 23 20 23L4 23C3.4477 23 3 22.5523 3 22C3 21.9027 3.0142 21.8059 3.0422 21.7127ZM9.344 7.6667L8.744 9.6667L15.256 9.6667L14.656 7.6667L9.344 7.6667ZM7.344 14.3333L6.744 16.3333L17.256 16.3333L16.656 14.3333L7.344 14.3333Z");
  stroke: none;
}

.n3n0ydboy {
  d: path("M2 22L22 22");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path clip-rule="evenodd" class="l3yfxqhfq"/><path class="n3n0ydboy"/></g>`,
		"fallback": "keyline-icons:traffic-cone-fill",
	});
}

export default Component;
