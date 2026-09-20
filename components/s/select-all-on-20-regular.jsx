import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x94b3aciz {
  fill: currentColor;
  d: path("M12.33 6.624a.5.5 0 0 1 .046.705l-3.5 4a.5.5 0 0 1-.73.025l-2-2a.5.5 0 1 1 .708-.708l1.622 1.622l3.148-3.597a.5.5 0 0 1 .705-.047M3 6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-.246 12c.55.614 1.347 1 2.236 1h4.5a4.5 4.5 0 0 0 4.5-4.5V8c0-.884-.383-1.68-.991-2.228V11q0 .15-.01.299v1.2a3.5 3.5 0 0 1-3.5 3.5h-1.434l-.056.001z");
}
</style><path class="x94b3aciz"/>`,
		"fallback": "fluent:select-all-on-20-regular",
	});
}

export default Component;
