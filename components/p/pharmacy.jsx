import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqax-6b-d.css';
import '../../css/h/h56qdhbsd.css';
import '../../css/l/lfpfzkb3s.css';
import '../../css/x/xg5z2wbhp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jqax-6b-d"><path class="h56qdhbsd"/><path class="lfpfzkb3s"/><path class="xg5z2wbhp"/></g>`,
		"fallback": "streamline-plump:pharmacy",
	});
}

export default Component;
