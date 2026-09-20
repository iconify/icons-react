import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mq2rqio3v {
  fill: currentColor;
  d: path("M1.5 7.5A.5.5 0 0 1 2 8v1l.005.103A1 1 0 0 0 3 10h1a.5.5 0 0 1 0 1H3a2 2 0 0 1-1.99-1.796L1 9V8a.5.5 0 0 1 .5-.5m9 0a.5.5 0 0 1 .5.5v1a2 2 0 0 1-2 2H8a.5.5 0 0 1 0-1h1a1 1 0 0 0 1-1V8a.5.5 0 0 1 .5-.5M8 5.5a.5.5 0 0 1 0 1H4a.5.5 0 0 1 0-1zM4 1a.5.5 0 0 1 0 1H3a1 1 0 0 0-1 1v1a.5.5 0 0 1-1 0V3a2 2 0 0 1 2-2zm5 0a2 2 0 0 1 2 2v1a.5.5 0 0 1-1 0V3a1 1 0 0 0-1-1H8a.5.5 0 0 1 0-1z");
}
</style><path class="mq2rqio3v"/>`,
		"fallback": "fluent:scan-dash-12-regular",
	});
}

export default Component;
