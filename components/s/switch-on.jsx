import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/v/vezrycbxd.css';
import '../../css/q/qdvxhbc0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="vezrycbxd"/><circle class="qdvxhbc0k"/></g>`,
		"fallback": "humbleicons:switch-on",
	});
}

export default Component;
