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
		"content": `<style>.g9v60on3f {
  d: path("M12 19C9.19108 19 7.78661 19 6.77772 18.3259C6.34096 18.034 5.96596 17.659 5.67412 17.2223C5 16.2134 5 14.8089 5 12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5C14.8089 5 16.2134 5 17.2223 5.67412C17.659 5.96596 18.034 6.34096 18.3259 6.77772C19 7.78661 19 9.19108 19 12C19 14.8089 19 16.2134 18.3259 17.2223C18.034 17.659 17.659 18.034 17.2223 18.3259C16.2134 19 14.8089 19 12 19Z");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k8gt8ib7o {
  d: path("M7 22H17");
}

.l3yrwhb1k {
  stroke-linejoin: round;
  d: path("M12 9V12.0769L14 14");
}

.vs49djbdr {
  d: path("M7 2H17");
}
</style><g class="ipq1z-bjh"><path class="g9v60on3f"/><path class="l3yrwhb1k"/><path class="vs49djbdr"/><path class="k8gt8ib7o"/></g>`,
		"fallback": "solar:watch-square-minimalistic-linear",
	});
}

export default Component;
