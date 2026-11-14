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
		"content": `<style>.gdat5nb5a {
  d: path("M2.5 9.25h19M12 3.5V15");
}

.o0uxpabcc {
  d: path("M2.5 3.5h19v17h-19Z");
}

.rc8yv697l {
  fill: currentColor;
  d: path("M2.5 15v3.5a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2V15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o0uxpabcc"/><path class="rc8yv697l"/><path class="gdat5nb5a"/></g>`,
		"fallback": "uix-sharp:table-footer",
	});
}

export default Component;
