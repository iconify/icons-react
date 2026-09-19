import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsftthb-j.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsftthb-j"/>`,
		"fallback": "fa6-solid:jar-wheat",
	});
}

export default Component;
