import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbcopub7q.css';
import '../../css/b/b1n3f83cw.css';

const viewBox = {"width":20,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbcopub7q"/><path class="b1n3f83cw"/>`,
		"fallback": "fontisto:nurse",
	});
}

export default Component;
