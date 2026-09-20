import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nqcs1viks.css';
import '../../css/n/nz4m5ubje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="nqcs1viks"/><path class="nz4m5ubje"/></g>`,
		"fallback": "streamline-freehand-color:text-formating-arrange-spacing",
	});
}

export default Component;
