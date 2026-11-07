import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlwu39hpt.css';
import '../../css/b/b466brbyk.css';
import '../../css/l/l2iaarb2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlwu39hpt"/><path class="b466brbyk"/><path class="l2iaarb2x"/>`,
		"fallback": "solar:umbrella-bold",
	});
}

export default Component;
