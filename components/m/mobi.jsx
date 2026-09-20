import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmzcyxbor.css';
import '../../css/c/cdw1yt0dr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmzcyxbor"/><path class="cdw1yt0dr"/>`,
		"fallback": "token:mobi",
	});
}

export default Component;
