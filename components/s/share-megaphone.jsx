import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tnifc7bqf.css';
import '../../css/m/mw3gdrjvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="tnifc7bqf"/><path class="mw3gdrjvl"/></g>`,
		"fallback": "streamline-freehand-color:share-megaphone",
	});
}

export default Component;
