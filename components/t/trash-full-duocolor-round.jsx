import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sju9b47kv.css';
import '../../css/c/cz5g47vfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sju9b47kv"/><path class="cz5g47vfa"/></g>`,
		"fallback": "coolicons:trash-full-duocolor-round",
	});
}

export default Component;
