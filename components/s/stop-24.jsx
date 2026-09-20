import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iclr56bfn.css';
import '../../css/w/wdgf1rbow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iclr56bfn"/><path class="wdgf1rbow"/>`,
		"fallback": "octicon:stop-24",
	});
}

export default Component;
