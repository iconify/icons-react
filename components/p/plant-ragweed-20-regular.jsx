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
		"content": `<style>.k7m5xrb1g {
  fill: currentColor;
  d: path("M10 2a2.5 2.5 0 0 0-2.44 3.048A2 2 0 0 0 6.677 8.5A2 2 0 0 0 8 12h1.5v4.293l-3.146-3.147a.5.5 0 0 0-.708.708L9.5 17.707v.793a.5.5 0 0 0 1 0v-.793l3.854-3.853a.5.5 0 0 0-.708-.708L10.5 16.293V12H12a2 2 0 0 0 1.323-3.5a2 2 0 0 0-.883-3.452q.06-.265.06-.548A2.5 2.5 0 0 0 10 2m2 9H8a1 1 0 1 1 0-2a.5.5 0 0 0 0-1a1 1 0 0 1 0-2h.268a.5.5 0 0 0 .432-.75a1.5 1.5 0 1 1 2.6 0a.5.5 0 0 0 .432.75H12a1 1 0 1 1 0 2a.5.5 0 0 0 0 1a1 1 0 1 1 0 2");
}
</style><path class="k7m5xrb1g"/>`,
		"fallback": "fluent:plant-ragweed-20-regular",
	});
}

export default Component;
