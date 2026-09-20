import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqax-6b-d.css';
import '../../css/f/f-qg8_yio.css';
import '../../css/o/ocxcer9cn.css';
import '../../css/g/gkfaaf7-a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jqax-6b-d"><path class="f-qg8_yio"/><path class="ocxcer9cn"/><path class="gkfaaf7-a"/></g>`,
		"fallback": "streamline-plump:water-melon",
	});
}

export default Component;
