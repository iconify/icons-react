import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o27adk0py.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o27adk0py"/>`,
		"fallback": "fontelico:spin5",
	});
}

export default Component;
