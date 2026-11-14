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
		"content": `<style>.brlssm51f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm7 0h11m-3 0v2.75m3-2.75v2.75M14.078 3.536l.049-1.016h.746l.049 1.016l.685.222l.637-.793l.603.439l-.557.851l.423.582l.981-.267l.231.709l-.951.361v.72l.951.361l-.231.709l-.981-.267l-.423.582l.557.851l-.603.439l-.637-.793l-.685.222l-.049 1.016h-.746l-.049-1.016l-.685-.222l-.637.793l-.603-.439l.557-.851l-.423-.582l-.981.267l-.231-.709l.951-.361v-.72l-.951-.361l.231-.709l.981.267l.423-.582l-.557-.851l.603-.439l.637.793Z");
}
</style><path class="brlssm51f"/>`,
		"fallback": "uix-sharp:key-cutting",
	});
}

export default Component;
