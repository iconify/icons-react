import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdsw_ab7l.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdsw_ab7l"/>`,
		"fallback": "fa:pied-piper-pp",
	});
}

export default Component;
