import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvpf93m0e.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvpf93m0e"/>`,
		"fallback": "f7:rectangle-arrow-up-right-arrow-down-left-slash",
	});
}

export default Component;
