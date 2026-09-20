import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fnd42w77c.css';
import '../../css/x/xhzrkf8kt.css';
import '../../css/i/ihjqf9bve.css';
import '../../css/d/dqe2afbuk.css';
import '../../css/m/mj7tlnbxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fnd42w77c"/><path class="xhzrkf8kt"/><path class="ihjqf9bve"/><path class="dqe2afbuk"/><path class="mj7tlnbxu"/></g>`,
		"fallback": "streamline-ultimate-color:network-user",
	});
}

export default Component;
