import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfzrs9bdi.css';
import '../../css/d/d3al2xbaq.css';
import '../../css/y/yu1x-pnxh.css';
import '../../css/x/xu1xjobpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfzrs9bdi"/><path class="d3al2xbaq"/><path class="yu1x-pnxh"/><path clip-rule="evenodd" class="xu1xjobpd"/>`,
		"fallback": "solar:receive-twice-square-outline",
	});
}

export default Component;
