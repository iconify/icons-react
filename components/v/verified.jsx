import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj0mwubcb.css';
import '../../css/q/qm3xmebmn.css';
import '../../css/s/s-rrjubfy.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oj0mwubcb"/><path class="qm3xmebmn"/><path class="s-rrjubfy"/>`,
		"fallback": "ant-design:verified",
	});
}

export default Component;
