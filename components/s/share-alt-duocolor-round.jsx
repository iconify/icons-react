import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j3fzuu1vw.css';
import '../../css/o/oc1leduhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j3fzuu1vw"/><path class="oc1leduhf"/></g>`,
		"fallback": "coolicons:share-alt-duocolor-round",
	});
}

export default Component;
