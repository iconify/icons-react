import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/e/etkn6vbnv.css';
import '../../css/y/yf25-lbut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="etkn6vbnv"/><path class="yf25-lbut"/></g>`,
		"fallback": "streamline-cyber:train-2",
	});
}

export default Component;
