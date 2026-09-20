import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwxeveicl.css';
import '../../css/c/czx85ujqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwxeveicl"/><path class="czx85ujqq"/>`,
		"fallback": "qlementine-icons:violin-24",
	});
}

export default Component;
