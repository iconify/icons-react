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
		"content": `<style>.gwg-y3bus {
  d: path("M20 7.95V7C20 5.11438 20 4.17157 19.4142 3.58579C18.8284 3 17.8856 3 16 3H12H8C6.11438 3 5.17157 3 4.58579 3.58579C4 4.17157 4 5.11438 4 7V7.95");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kozw_-d6f {
  d: path("M12 21V3");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ost3o95wd {
  d: path("M7 21H17");
}
</style><g class="hntgybcog"><path class="gwg-y3bus"/><path class="kozw_-d6f"/><path class="ost3o95wd"/></g>`,
		"fallback": "solar:text-format-line-duotone",
	});
}

export default Component;
