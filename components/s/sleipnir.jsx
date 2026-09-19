import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_btfpb5o.css';

const viewBox = {"width":558,"height":770};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_btfpb5o"/>`,
		"fallback": "ls:sleipnir",
	});
}

export default Component;
