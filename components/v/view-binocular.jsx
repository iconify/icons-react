import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvh7nq3mz.css';
import '../../css/j/j1fv-acqq.css';
import '../../css/w/w300h1bku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvh7nq3mz"/><path class="j1fv-acqq"/><path class="w300h1bku"/>`,
		"fallback": "streamline-freehand:view-binocular",
	});
}

export default Component;
