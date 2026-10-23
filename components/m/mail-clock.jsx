import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xph50ihtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xph50ihtp"/>`,
		"fallback": "vadivam:mail-clock",
	});
}

export default Component;
