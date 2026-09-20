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
		"content": `<style>.a4n8j7bon {
  fill: currentColor;
  d: path("M6.616 21q-.691 0-1.153-.462T5 19.385V8.423L10.423 3h6.962q.69 0 1.153.463T19 4.615v14.77q0 .69-.462 1.152T17.384 21zM12 16.23q.31 0 .501-.21t.191-.481t-.191-.482t-.501-.21t-.501.21t-.191.482q0 .27.191.481q.192.21.501.21m-.5-2.807h1V8.769h-1z");
}
</style><path class="a4n8j7bon"/>`,
		"fallback": "material-symbols-light:sd-card-alert",
	});
}

export default Component;
