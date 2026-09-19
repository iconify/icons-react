import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm3xmebmn.css';
import '../../css/w/wtww-cbab.css';
import '../../css/k/k3hg-_0hy.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm3xmebmn"/><path class="wtww-cbab"/><path class="k3hg-_0hy"/>`,
		"fallback": "ant-design:safety-certificate-twotone",
	});
}

export default Component;
