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
		"content": `<style>.cai4nabyq {
  d: path("M11.24 13.55a5.75 5.75 0 1 1 2.43-2.53");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r29txxb8n {
  d: path("M8.5 2.75a2.25 5.75 0 0 1 0 11.5a2.25 5.75 0 0 1 0-11.5");
}

.uypz77kyu {
  d: path("M2.75 8.5q5.75 3 11.5 0m4.42 4.39l1.66.72q.92.39.92 1.39v1.4q0 1-.67 1.74l-2.16 2.37q-.67.74-1.34 0l-2.16-2.37q-.67-.74-.67-1.74V15q0-1 .92-1.39l1.66-.72q.92-.39 1.84 0");
}
</style><g class="hntgybcog"><path class="cai4nabyq"/><path class="r29txxb8n"/><path class="uypz77kyu"/></g>`,
		"fallback": "iconoven:safe-browsing",
	});
}

export default Component;
