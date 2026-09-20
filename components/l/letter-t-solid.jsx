import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfh642bof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfh642bof"/>`,
		"fallback": "mynaui:letter-t-solid",
	});
}

export default Component;
