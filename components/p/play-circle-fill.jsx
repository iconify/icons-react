import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9b945bdq.css';
import '../../css/n/n3pztie1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9b945bdq"/><path class="n3pztie1y"/>`,
		"fallback": "eva:play-circle-fill",
	});
}

export default Component;
