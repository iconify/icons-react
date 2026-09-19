import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b39z8jw0z {
  d: path("M10.061 19.26c7.162 5.478 12.275 5.635 16.59 5.635c4.49 0 7.565-.713 9.168-1.05");
}

.j5efn538f {
  cx: 17.509px;
  cy: 12.328px;
  r: 7.828px;
}

.pj_fy4bxs {
  d: path("M27.367 12.313c.836 4.995.09 8.862-2.199 12.477M12.82 29.88c6.364 5.797 22.566 6.93 24.93 7.24");
}

.qpfg-i4yi {
  cx: 19.572px;
  cy: 15.158px;
  rx: 1.999px;
  ry: 0.963px;
}

.tckzm9bmy {
  d: path("M25.095 10.122c9.547 8.396 13.224 17.026 13.224 23.43c0 5.412-2.86 9.948-7.181 9.948c-10.844 0-22.787-13.357-21.028-28.54");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="j5efn538f"/><path class="tckzm9bmy"/><path class="b39z8jw0z"/><path class="pj_fy4bxs"/><ellipse transform="rotate(-33.976 19.572 15.158)" class="qpfg-i4yi"/></g>`,
		"fallback": "arcticons:obwheels",
	});
}

export default Component;
