import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.m4mh00-gx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 43.5c13.355-4.243 16.635-14.368 16.635-19.286V11.309a1.13 1.13 0 0 0-.739-1.062L24.788 4.641a2.27 2.27 0 0 0-1.576 0L8.104 10.246a1.13 1.13 0 0 0-.74 1.063v12.905c0 4.918 3.281 15.043 16.636 19.286");
}

.nhx4d0svz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m26.816 22.652l-2.81-3.822l-2.771 3.848L24 18.825l-4.516-1.447l4.519 1.44l-.02-4.741l.027 4.742l4.504-1.483l-4.502 1.49ZM18 30.1h12");
}
</style><path class="m4mh00-gx"/><path class="nhx4d0svz"/>`,
		"fallback": "arcticons:passman",
	});
}

export default Component;
