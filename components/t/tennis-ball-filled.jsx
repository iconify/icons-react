import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvi2gab-r.css';
import '../../css/t/tctjssbck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvi2gab-r"/><path class="tctjssbck"/>`,
		"fallback": "boxicons:tennis-ball-filled",
	});
}

export default Component;
