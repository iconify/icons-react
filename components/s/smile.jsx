import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqxcp5bnk.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqxcp5bnk"/>`,
		"fallback": "fa-regular:smile",
	});
}

export default Component;
