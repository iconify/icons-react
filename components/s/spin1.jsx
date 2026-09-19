import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuoe7pgag.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vuoe7pgag"/>`,
		"fallback": "fontelico:spin1",
	});
}

export default Component;
