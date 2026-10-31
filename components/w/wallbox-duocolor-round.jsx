import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z64abgesa.css';
import '../../css/q/qo-7f44mm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z64abgesa"/><path class="qo-7f44mm"/></g>`,
		"fallback": "coolicons:wallbox-duocolor-round",
	});
}

export default Component;
