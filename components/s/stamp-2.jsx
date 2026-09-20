import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/x/xjfumcb3t.css';
import '../../css/h/hwvh15dbf.css';
import '../../css/w/wgurmr13m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="xjfumcb3t"/><path class="hwvh15dbf"/><path class="wgurmr13m"/></g>`,
		"fallback": "streamline-cyber:stamp-2",
	});
}

export default Component;
