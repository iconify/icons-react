import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gshe_di8n.css';
import '../../css/q/q3p31cclv.css';
import '../../css/y/ywkypdbwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gshe_di8n"/><path class="q3p31cclv"/><path class="ywkypdbwn"/>`,
		"fallback": "fontisto:tongue",
	});
}

export default Component;
