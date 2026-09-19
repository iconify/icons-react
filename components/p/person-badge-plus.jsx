import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hq_pgtbly.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hq_pgtbly"/>`,
		"fallback": "f7:person-badge-plus",
	});
}

export default Component;
