import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/z6gc64byl.css';
import '../../css/a/afkv757cy.css';
import '../../css/x/xhhh0v1_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="z6gc64byl"/><path class="afkv757cy"/><path class="xhhh0v1_e"/></g>`,
		"fallback": "streamline-freehand-color:safety-danger-mudslide",
	});
}

export default Component;
