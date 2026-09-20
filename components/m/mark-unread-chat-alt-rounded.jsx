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
		"content": `<style>.zxfzdnbgg {
  fill: currentColor;
  d: path("M17.23 5.733q-.73-.728-.73-1.77t.729-1.77t1.769-.731t1.771.728t.731 1.77t-.728 1.77t-1.77.732t-1.771-.729M6.077 17l-1.704 1.704q-.379.379-.876.171T3 18.133V4.616q0-.691.463-1.153T4.615 3H14.6q-.061.25-.071.49t-.006.51q.029.729.235 1.354t.55 1.146H7q-.213 0-.356.144t-.144.357t.144.356T7 7.5h9.442q.495.462 1.161.712t1.397.25q.512 0 1.027-.125T21 7.962v7.432q0 .681-.462 1.144T19.385 17zM7 10.5h10q.213 0 .356-.144t.144-.357t-.144-.356T17 9.5H7q-.213 0-.356.144t-.144.357t.144.356T7 10.5m0 3h6q.213 0 .356-.144t.144-.357t-.144-.356T13 12.5H7q-.213 0-.356.144t-.144.357t.144.356T7 13.5");
}
</style><path class="zxfzdnbgg"/>`,
		"fallback": "material-symbols-light:mark-unread-chat-alt-rounded",
	});
}

export default Component;
