import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/x/xq81j169i.css';
import '../../css/z/zevebvbdj.css';
import '../../css/n/n2z229bhf.css';
import '../../css/l/ly23pmblx.css';
import '../../css/g/gt402wbqt.css';
import '../../css/p/p1pntkvnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="xq81j169i"/><path class="zevebvbdj"/><path class="n2z229bhf wm-shine"/><path class="ly23pmblx wm-k"/><path class="gt402wbqt wm-a"/><path class="p1pntkvnd wm-deco"/></g>`,
		"fallback": "withicons-kawaii:train",
	});
}

export default Component;
