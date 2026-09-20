import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kr2kdfbqj.css';
import '../../css/r/rmktywb5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kr2kdfbqj"/><path class="rmktywb5f"/></g>`,
		"fallback": "lucide:shopping-bag",
	});
}

export default Component;
