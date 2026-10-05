import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/c/ckkkwfqzb.css';
import '../../css/s/sz5sjcpfx.css';
import '../../css/w/ww9wr961u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="ckkkwfqzb"/><path class="sz5sjcpfx"/><path class="ww9wr961u"/></g>`,
		"fallback": "matita:rotate-cw",
	});
}

export default Component;
