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
		"content": `<style>.y8fgumbuh {
  fill: currentColor;
  d: path("M7.45 16q-.525 0-.825-.425t-.1-.925l4.25-11.05q.125-.275.363-.438T11.65 3h.7q.275 0 .513.163t.362.437l4.25 11.05q.2.5-.1.925T16.55 16zm-2.075 5q-.5 0-.812-.413t-.138-.912l.125-.3q.2-.625.725-1T6.45 18h11.1q.65 0 1.175.375t.725 1l.125.3q.175.5-.137.913t-.813.412z");
}
</style><path class="y8fgumbuh"/>`,
		"fallback": "material-symbols:stylus-pencil-rounded",
	});
}

export default Component;
