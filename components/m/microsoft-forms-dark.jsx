import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz_svobux.css';
import '../../css/h/h6ro5gj3z.css';
import '../../css/m/mmux6pkuu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz_svobux"/><path class="h6ro5gj3z"/><path class="mmux6pkuu"/>`,
		"fallback": "selfhst:microsoft-forms-dark",
	});
}

export default Component;
