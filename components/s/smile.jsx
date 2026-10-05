import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/a/a3foef0gz.css';
import '../../css/t/tfdscjqrz.css';
import '../../css/z/z7u64yc6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="a3foef0gz"/><path class="tfdscjqrz"/><path class="z7u64yc6u"/></g>`,
		"fallback": "matita:smile",
	});
}

export default Component;
