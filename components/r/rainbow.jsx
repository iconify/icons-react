import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9a92jqlz.css';
import '../../css/z/zbfvni7ud.css';
import '../../css/w/w5v6gnb2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k z9a92jqlz"/><path class="wm-k zbfvni7ud"/><path class="w5v6gnb2d wm-a"/>`,
		"fallback": "withicons-bauhaus:rainbow",
	});
}

export default Component;
