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
		"content": `<style>.xvcv0eb6w {
  fill: currentColor;
  d: path("M13.5 15a1.5 1.5 0 0 1 0 3h-7a1.5 1.5 0 0 1 0-3zM18 7a1 1 0 1 1 0 2h-3v2a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8.5A1.5 1.5 0 0 1 6.5 7zM5.5 2a.5.5 0 0 1 .5.5c0 .47.274.706.8 1.1l.04.03C7.314 3.985 8 4.498 8 5.5a.5.5 0 0 1-1 0c0-.47-.274-.706-.8-1.1l-.04-.03C5.686 4.015 5 3.502 5 2.5a.5.5 0 0 1 .5-.5m3 0a.5.5 0 0 1 .5.5c0 .47.274.706.8 1.1l.04.03c.474.355 1.16.868 1.16 1.87a.5.5 0 0 1-1 0c0-.47-.274-.706-.8-1.1l-.04-.03C8.686 4.015 8 3.502 8 2.5a.5.5 0 0 1 .5-.5m3 0a.5.5 0 0 1 .5.5c0 .47.274.706.8 1.1l.04.03c.474.355 1.16.868 1.16 1.87a.5.5 0 0 1-1 0c0-.47-.274-.706-.8-1.1l-.04-.03C11.686 4.015 11 3.502 11 2.5a.5.5 0 0 1 .5-.5");
}
</style><path class="xvcv0eb6w"/>`,
		"fallback": "fluent:stove-20-filled",
	});
}

export default Component;
