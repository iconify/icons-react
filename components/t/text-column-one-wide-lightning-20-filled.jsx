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
		"content": `<style>.ltv5ic86q {
  fill: currentColor;
  d: path("M3 5.75A.75.75 0 0 1 3.75 5h12.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.75m0 3A.75.75 0 0 1 3.75 8h12.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 8.75M3.75 11a.75.75 0 0 0 0 1.5h7.793l.625-1.5zm7.168 3l-.625 1.5H3.75a.75.75 0 0 1 0-1.5zm.583 3.012h1.75l-.59 2.363c-.121.485.462.828.826.488l4.873-4.556c.497-.466.169-1.301-.512-1.301H16.75l.781-2.347a.5.5 0 0 0-.474-.659h-3.473a.5.5 0 0 0-.462.308l-2.083 5.01a.5.5 0 0 0 .462.694");
}
</style><path class="ltv5ic86q"/>`,
		"fallback": "fluent:text-column-one-wide-lightning-20-filled",
	});
}

export default Component;
