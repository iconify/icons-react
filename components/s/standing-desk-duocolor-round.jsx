import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w1oesmbrj.css';
import '../../css/i/iyv9vnbio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w1oesmbrj"/><path class="iyv9vnbio"/></g>`,
		"fallback": "coolicons:standing-desk-duocolor-round",
	});
}

export default Component;
