import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj57gablw.css';
import '../../css/z/zqhih1b6w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oj57gablw"/><path class="zqhih1b6w"/>`,
		"fallback": "octicon:sidebar-collapse-16",
	});
}

export default Component;
