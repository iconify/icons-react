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
		"content": `<style>.ilsb9p8xy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 5.25c-.25-1 .25-2 1.5-2.5M6 5.25h12q1.25 0 .66 1.1l-4.07 7.55Q14 15 12.75 15h-1.5Q10 15 9.41 13.9L5.34 6.35q-.59-1.1.66-1.1M10.4 15h3.2q.4 0 .33.39l-.76 3.97q-.07.39-.4.16l-.44-.29q-.33-.23-.66 0l-.44.29q-.33.23-.4-.16l-.76-3.97Q10 15 10.4 15");
}
</style><path class="ilsb9p8xy"/>`,
		"fallback": "iconoven:piping-bag",
	});
}

export default Component;
