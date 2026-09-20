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
		"content": `<style>.qy8jnbufi {
  fill: currentColor;
  d: path("M16.004 19a3 3 0 0 1-2.997-2.916L13 16c0-2.933 1.067-5.382 2.113-7.081a16 16 0 0 1 1.446-1.985a12 12 0 0 1 .664-.714l.011-.012l.004-.003l.001-.002a.75.75 0 0 1 1.027 1.094l-.005.005l-.028.026l-.113.115c-.1.104-.246.26-.423.467c-.355.414-.83 1.023-1.306 1.796a13 13 0 0 0-1.526 3.519A3 3 0 1 1 16.004 19m-8 0a3 3 0 0 1-2.997-2.916L5 16c0-2.933 1.067-5.382 2.113-7.081A16 16 0 0 1 8.56 6.934a12 12 0 0 1 .664-.714l.011-.012l.004-.003l.001-.002a.75.75 0 0 1 1.027 1.094l-.005.005l-.028.026l-.113.115c-.1.104-.246.26-.423.467c-.354.414-.83 1.023-1.306 1.796a13 13 0 0 0-1.526 3.519A3 3 0 1 1 8.004 19m8-1.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-8 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3");
}
</style><path class="qy8jnbufi"/>`,
		"fallback": "fluent:text-quote-opening-24-regular",
	});
}

export default Component;
