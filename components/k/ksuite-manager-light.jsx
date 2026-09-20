import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy8rokwbh.css';
import '../../css/e/eajtpz02m.css';
import '../../css/q/qxwq8bcbf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy8rokwbh"/><path class="eajtpz02m"/><path class="qxwq8bcbf"/>`,
		"fallback": "selfhst:ksuite-manager-light",
	});
}

export default Component;
