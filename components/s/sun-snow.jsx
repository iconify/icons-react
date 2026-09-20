import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/it84gzbsp.css';
import '../../css/n/n05xy0btt.css';
import '../../css/n/n7-jbgbqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="it84gzbsp"/><path class="n05xy0btt"/><path class="n7-jbgbqq"/></g>`,
		"fallback": "lucide:sun-snow",
	});
}

export default Component;
