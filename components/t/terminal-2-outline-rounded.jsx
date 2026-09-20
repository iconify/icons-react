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
		"content": `<style>.x0o8p05fd {
  fill: currentColor;
  d: path("M13 20q-.425 0-.712-.288T12 19t.288-.712T13 18h6q.425 0 .713.288T20 19t-.288.713T19 20zM8.675 10L4.8 6.125q-.3-.3-.3-.712t.3-.713t.7-.3t.7.3l4.6 4.6q.3.3.3.7t-.3.7l-4.6 4.6q-.3.3-.7.3t-.7-.3t-.3-.712t.3-.713z");
}
</style><path class="x0o8p05fd"/>`,
		"fallback": "material-symbols:terminal-2-outline-rounded",
	});
}

export default Component;
