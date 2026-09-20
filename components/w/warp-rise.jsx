import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/y/yefusvbjz.css';
import '../../css/g/gictbubip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="yefusvbjz"/><path class="gictbubip"/></g>`,
		"fallback": "streamline-ultimate:warp-rise",
	});
}

export default Component;
