import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gshe_di8n.css';
import '../../css/d/dahaxobbu.css';
import '../../css/v/vr1aztb8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gshe_di8n"/><path class="dahaxobbu"/><path class="vr1aztb8m"/>`,
		"fallback": "fontisto:open-mouth",
	});
}

export default Component;
