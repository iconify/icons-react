import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dulco3bpl.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dulco3bpl"/>`,
		"fallback": "f7:moon-circle",
	});
}

export default Component;
