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
		"content": `<style>.c7z9o8buo {
  d: path("M7 15h10");
}

.ewxc27lvw {
  d: path("M7 11h4");
}

.jd_dotbnq {
  d: path("M6 2h12a2 2 0 0 1 2 2v15l-2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2V4a2 2 0 0 1 2 -2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o72_fg3he {
  d: path("M14 11h3");
}

.tu0fdo1xi {
  d: path("M7 7h10");
}
</style><g class="nrj6p8qat"><path class="jd_dotbnq"/><path class="tu0fdo1xi"/><path class="ewxc27lvw"/><path class="o72_fg3he"/><path class="c7z9o8buo"/></g>`,
		"fallback": "iconmind:line-item-outline-regular",
	});
}

export default Component;
