import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_h32ggwa.css';
import '../../css/y/yka_8gutb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_h32ggwa"/><path class="yka_8gutb"/>`,
		"fallback": "streamline-ultimate:office-file-graph-bold",
	});
}

export default Component;
