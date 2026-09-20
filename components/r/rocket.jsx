import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/poo62ovlz.css';
import '../../css/j/jwn4f8bbo.css';
import '../../css/n/nnjt6sbyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="poo62ovlz"/><path class="jwn4f8bbo"/><path class="nnjt6sbyf"/></g>`,
		"fallback": "lucide:rocket",
	});
}

export default Component;
