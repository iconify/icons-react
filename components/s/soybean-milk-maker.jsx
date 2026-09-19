import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/t/td614xh2x.css';
import '../../css/x/xv2a6ybxr.css';
import '../../css/f/fqfemozio.css';
import '../../css/w/withcytnh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="td614xh2x"/><path class="xv2a6ybxr"/><path class="fqfemozio"/><path class="withcytnh"/></g>`,
		"fallback": "icon-park:soybean-milk-maker",
	});
}

export default Component;
