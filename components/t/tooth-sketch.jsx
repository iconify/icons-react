import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tpbfs-n7q.css';
import '../../css/b/b4mimu6xf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="tpbfs-n7q"/><path class="b4mimu6xf"/></g>`,
		"fallback": "withicons:tooth-sketch",
	});
}

export default Component;
