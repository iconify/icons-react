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
		"content": `<style>.r9icrdbrx {
  fill: currentColor;
  d: path("M17.994 4.42Q18 4.336 18 4.25a2.25 2.25 0 1 0-.048.464l.002-.01q.029-.14.04-.284M2.5 4h10.01a3.3 3.3 0 0 0 .077 1H2.5a.5.5 0 0 1 0-1M2 9.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m.5 4.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1z");
}
</style><path class="r9icrdbrx"/>`,
		"fallback": "fluent:navigation-unread-20-regular",
	});
}

export default Component;
