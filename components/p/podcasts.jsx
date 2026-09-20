import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3t4qwbjm.css';
import '../../css/b/b5_gm_r9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3t4qwbjm"/><path class="b5_gm_r9l"/>`,
		"fallback": "pixel:podcasts",
	});
}

export default Component;
