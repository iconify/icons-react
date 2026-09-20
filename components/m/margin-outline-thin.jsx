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
		"content": `<style>.bo8u7q83r {
  d: path("M21 12a9 9 0 1 1 -9 -9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j8_8pdbyc {
  d: path("M12 3v9");
}

.zrdou8b0n {
  d: path("M12 12h9");
}
</style><g class="hntgybcog"><path class="bo8u7q83r"/><path class="zrdou8b0n"/><path class="j8_8pdbyc"/></g>`,
		"fallback": "iconmind:margin-outline-thin",
	});
}

export default Component;
