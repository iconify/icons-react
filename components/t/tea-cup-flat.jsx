import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m_praxb0r.css';
import '../../css/x/xn0d61t6r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="m_praxb0r"/><path class="xn0d61t6r"/></g>`,
		"fallback": "streamline-flex-color:tea-cup-flat",
	});
}

export default Component;
