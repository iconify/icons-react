import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvilx1q3c.css';
import '../../css/x/xuwun2u6v.css';
import '../../css/h/hzpbaixyj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="kvilx1q3c"><path class="xuwun2u6v"/><path class="hzpbaixyj"/></g>`,
		"fallback": "icon-park:sort",
	});
}

export default Component;
