import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gshe_di8n.css';
import '../../css/z/zjgyanbqn.css';
import '../../css/f/fecpnosez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gshe_di8n"/><path class="zjgyanbqn"/><path class="fecpnosez"/>`,
		"fallback": "fontisto:surprised",
	});
}

export default Component;
