import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0395bcho.css';
import '../../css/j/j29g_4b6w.css';
import '../../css/k/kwq97piub.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0395bcho"/><path class="j29g_4b6w"/><path class="kwq97piub"/>`,
		"fallback": "selfhst:microsoft-forms-2019-light",
	});
}

export default Component;
