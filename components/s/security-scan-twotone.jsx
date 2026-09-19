import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm3xmebmn.css';
import '../../css/x/x6zdh-elq.css';
import '../../css/k/kghrh9bow.css';
import '../../css/w/wjl1hub3r.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm3xmebmn"/><path class="x6zdh-elq"/><path class="kghrh9bow"/><path class="wjl1hub3r"/>`,
		"fallback": "ant-design:security-scan-twotone",
	});
}

export default Component;
