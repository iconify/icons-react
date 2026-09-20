import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/k9e-gdbnw.css';
import '../../css/v/v9ln_nbia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="k9e-gdbnw"/><path class="v9ln_nbia"/></g>`,
		"fallback": "streamline-sharp-color:scanner-flat",
	});
}

export default Component;
