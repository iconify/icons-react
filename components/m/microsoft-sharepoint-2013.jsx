import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfl_6ccyr.css';
import '../../css/e/epc2a1c0l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfl_6ccyr"/><path class="epc2a1c0l"/>`,
		"fallback": "selfhst:microsoft-sharepoint-2013",
	});
}

export default Component;
