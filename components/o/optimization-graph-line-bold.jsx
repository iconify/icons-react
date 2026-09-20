import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk9vvbbsy.css';
import '../../css/l/l14akwbha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk9vvbbsy"/><path class="l14akwbha"/>`,
		"fallback": "streamline-ultimate:optimization-graph-line-bold",
	});
}

export default Component;
