import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nkqj6j90v.css';
import '../../css/h/hlsy3c2kt.css';
import '../../css/g/gyevrrb6e.css';
import '../../css/z/z2na20gje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="nkqj6j90v"/><path class="hlsy3c2kt"/><circle class="gyevrrb6e"/><circle class="z2na20gje"/></g>`,
		"fallback": "hugeicons:school-bell-01",
	});
}

export default Component;
