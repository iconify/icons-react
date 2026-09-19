import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wk51pcbgt.css';
import '../../css/v/vaj17wbut.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wk51pcbgt"/><path class="vaj17wbut"/></g>`,
		"fallback": "ant-design:python-outlined",
	});
}

export default Component;
