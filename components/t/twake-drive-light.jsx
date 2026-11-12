import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qumyb9bal.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qumyb9bal"/>`,
		"fallback": "selfhst:twake-drive-light",
	});
}

export default Component;
