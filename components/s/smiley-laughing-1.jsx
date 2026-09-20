import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/d/d2uxmvbho.css';
import '../../css/x/xodvb3hwp.css';
import '../../css/o/ormb2nb4l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="d2uxmvbho"/><path class="xodvb3hwp"/><path class="ormb2nb4l"/></g>`,
		"fallback": "streamline-plump:smiley-laughing-1",
	});
}

export default Component;
