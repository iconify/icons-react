import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/amwa-x10o.css';
import '../../css/z/zs6nbgzoh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="amwa-x10o"/><path class="zs6nbgzoh"/></g>`,
		"fallback": "coolicons:list-sparkle-duocolor-round",
	});
}

export default Component;
