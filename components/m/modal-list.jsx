import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjzxuveym.css';
import '../../css/f/foygadfek.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjzxuveym"/><path class="foygadfek"/>`,
		"fallback": "vaadin:modal-list",
	});
}

export default Component;
