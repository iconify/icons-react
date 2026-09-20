import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbxbaodhg.css';
import '../../css/m/mawdj8s2p.css';
import '../../css/m/mz9-t6b9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vbxbaodhg"><path class="mawdj8s2p"/><path class="mz9-t6b9f"/></g>`,
		"fallback": "lets-icons:ito-duotone",
	});
}

export default Component;
