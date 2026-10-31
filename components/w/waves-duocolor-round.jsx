import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f6e9ytbin.css';
import '../../css/o/o5scq4bwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f6e9ytbin"/><path class="o5scq4bwj"/></g>`,
		"fallback": "coolicons:waves-duocolor-round",
	});
}

export default Component;
