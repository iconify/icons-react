import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/ccrml5b8u.css';
import '../../css/h/h96o6wbao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="ccrml5b8u"/><path class="h96o6wbao"/></g>`,
		"fallback": "grommet-icons:qr",
	});
}

export default Component;
