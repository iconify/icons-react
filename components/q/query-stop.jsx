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
		"content": `<style>.b0b5lfeac {
  d: path("M12.2 20.5H2.5v-17h19v8.7m-19-4.45h19");
}

.mzjxa5-aa {
  fill: currentColor;
  d: path("M15 15h6v6h-6Z");
}

.tz9cve50q {
  d: path("M7 10.5L4.5 13L7 15.5m3.5-5.5l-1.75 6m3.5-5.5l1.697 1.697");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b0b5lfeac"/><path class="tz9cve50q"/><path class="mzjxa5-aa"/></g>`,
		"fallback": "uix-sharp:query-stop",
	});
}

export default Component;
