import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.aqlza8bkm {
  fill: var(--svg-color--fff, #fff);
  stroke: var(--svg-color--fff, #fff);
  stroke-miterlimit: 10;
  d: path("M47.6 43.5H16.5c-1.9 0-1.9 3 0 3h31.1c1.9 0 1.9-3 0-3zm-31.2-4.4h12c.8 0 1.5-.7 1.5-1.5v-.1c0-.5-.3-1.1-.7-1.3c-8.5-4-6.7-18.8 2.9-18.8c4.3 0 7 3.5 8.1 7.2c1.3 4.6-1.4 9.3-5.3 11.3c-.4.2-.7.8-.7 1.3v.2c0 .8.7 1.5 1.5 1.5h12c1.9 0 1.9-3 0-3h-8.2c1.2-1.2 2.3-2.7 2.5-3.1c1.2-2.2 1.6-5.2 1.2-7.7c-1-6.1-5-10.8-11.1-10.8c-5.6 0-9.9 4.6-11.4 9.5c-.7 2.5-.5 5.6.5 8c.6 1.3 1.2 2.7 2.2 3.7c0 0 .2.2.4.5h-7.4c-1.9.1-1.9 3.1 0 3.1z");
}

.hzzz1jv6x {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--699635, #699635);
}
</style><circle class="hzzz1jv6x"/><path class="aqlza8bkm"/>`,
		"fallback": "emojione:libra",
	});
}

export default Component;
