import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ismujpbiw.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/av3m8fbrw.css';
import '../../css/d/d2ddiubde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG13CMxczo" class="ismujpbiw"/></defs><g class="ft5dv1b6b"><use href="#SVG13CMxczo"/><g class="av3m8fbrw"><path class="d2ddiubde"/><use href="#SVG13CMxczo"/></g></g>`,
		"fallback": "tdesign:system-application",
	});
}

export default Component;
