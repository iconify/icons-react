import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m_dkvxy7f.css';
import '../../css/m/m91w3qb8n.css';
import '../../css/u/u4-0twl4u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="m_dkvxy7f"/><path class="m91w3qb8n"/><path class="u4-0twl4u"/></g>`,
		"fallback": "streamline-color:mail-incoming-flat",
	});
}

export default Component;
