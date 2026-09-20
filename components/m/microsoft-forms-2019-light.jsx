import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_ttfbbvt.css';
import '../../css/j/j29g_4b6w.css';
import '../../css/n/nzpzadcnc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_ttfbbvt"/><path class="j29g_4b6w"/><path class="nzpzadcnc"/>`,
		"fallback": "selfhst:microsoft-forms-2019-light",
	});
}

export default Component;
