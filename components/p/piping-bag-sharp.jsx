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
		"content": `<style>.oxx30q7_t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 5.25l-.432-1.727L13.5 2.75M6 5.25h13.25l-.59 1.1l-4.07 7.55L14 15h-4l-.59-1.1l-4.07-7.55l-.59-1.1zM10.4 15H14l-.07.39l-.76 3.97l-.07.39l-.33-.23l-.44-.29L12 19l-.33.23l-.44.29l-.33.23l-.07-.39l-.76-3.97L10 15z");
}
</style><path class="oxx30q7_t"/>`,
		"fallback": "iconoven:piping-bag-sharp",
	});
}

export default Component;
