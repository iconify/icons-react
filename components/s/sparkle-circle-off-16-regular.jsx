import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zx3x69ztg {
  fill: currentColor;
  d: path("M14.147 1.146a.5.5 0 1 1 .707.708l-1.565 1.563a7 7 0 0 1-9.872 9.872l-1.563 1.565a.5.5 0 1 1-.708-.707zM4.125 12.58a6 6 0 0 0 8.454-8.454zM9.464 8.4c.16-.533.913-.533 1.072 0l.143.474a.67.67 0 0 0 .447.447l.475.143c.532.16.532.912 0 1.072l-.475.143a.67.67 0 0 0-.447.447l-.143.475c-.16.532-.912.532-1.072 0l-.144-.476a.67.67 0 0 0-.447-.447l-.474-.142c-.532-.16-.532-.912 0-1.072l.475-.143a.67.67 0 0 0 .446-.447zM8 1c1.39 0 2.684.406 3.773 1.104l-.726.727a6 6 0 0 0-8.216 8.216l-.727.726A7 7 0 0 1 8 1M5.744 4.285c.252-.713 1.26-.713 1.512 0l.236.665a.92.92 0 0 0 .559.558l.236.083l-2.695 2.695l-.083-.235a.92.92 0 0 0-.559-.56l-.665-.235c-.713-.252-.713-1.26 0-1.512l.665-.236a.92.92 0 0 0 .559-.559z");
}
</style><path class="zx3x69ztg"/>`,
		"fallback": "fluent:sparkle-circle-off-16-regular",
	});
}

export default Component;
