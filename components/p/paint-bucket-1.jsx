import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/e/eqdzee4pj.css';
import '../../css/u/uad0lqssp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="eqdzee4pj"/><path class="uad0lqssp"/></g>`,
		"fallback": "streamline-cyber:paint-bucket-1",
	});
}

export default Component;
