import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ae-7w5kir.css';
import '../../css/t/tgoj8bces.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ae-7w5kir"/><path class="tgoj8bces"/></g>`,
		"fallback": "lucide-lab:lingerie",
	});
}

export default Component;
