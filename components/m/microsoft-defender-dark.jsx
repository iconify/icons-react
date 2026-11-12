import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3gookywi.css';
import '../../css/m/m80s_bbww.css';
import '../../css/e/e84rycour.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3gookywi"/><path class="m80s_bbww"/><path class="e84rycour"/>`,
		"fallback": "selfhst:microsoft-defender-dark",
	});
}

export default Component;
