import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wabg6tf_x.css';
import '../../css/c/ck9b5hbsn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wabg6tf_x"/><path class="ck9b5hbsn"/>`,
		"fallback": "flat-color-icons:services",
	});
}

export default Component;
