import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6you7bfh.css';
import '../../css/i/icgyn9bub.css';
import '../../css/p/pzuqi_b5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s6you7bfh"/><path clip-rule="evenodd" class="icgyn9bub"/><path class="pzuqi_b5p"/>`,
		"fallback": "streamline-freehand:smart-watch-circle",
	});
}

export default Component;
