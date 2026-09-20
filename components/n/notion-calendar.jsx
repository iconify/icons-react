import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxq-hubfm.css';
import '../../css/z/zylz4v1cy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxq-hubfm"/><path class="zylz4v1cy"/>`,
		"fallback": "selfhst:notion-calendar",
	});
}

export default Component;
