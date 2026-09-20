import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8okp_dga.css';
import '../../css/o/o5ofv024l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8okp_dga"/><path class="o5ofv024l"/>`,
		"fallback": "streamline-ultimate:tools-kitchen-scale-bold",
	});
}

export default Component;
