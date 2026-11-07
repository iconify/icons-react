import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/woe0hukjy.css';
import '../../css/c/c_jaw7s9r.css';
import '../../css/s/s8ujp6b8o.css';
import '../../css/h/hjkpptbpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="woe0hukjy"/><path class="c_jaw7s9r"/><path clip-rule="evenodd" class="s8ujp6b8o"/><path clip-rule="evenodd" class="hjkpptbpa"/>`,
		"fallback": "solar:sale-square-outline",
	});
}

export default Component;
