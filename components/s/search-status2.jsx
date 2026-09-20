import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzpy-2vtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzpy-2vtx"/>`,
		"fallback": "reicon:search-status2",
	});
}

export default Component;
