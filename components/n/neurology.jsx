import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgwm9obwk.css';
import '../../css/j/jsygb7bfs.css';
import '../../css/n/npgqhk_3m.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgwm9obwk"/><path class="jsygb7bfs"/><path class="npgqhk_3m"/>`,
		"fallback": "medical-icon:neurology",
	});
}

export default Component;
