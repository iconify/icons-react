import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/heb-_nt2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="heb-_nt2j"/>`,
		"fallback": "lineicons:skype",
	});
}

export default Component;
