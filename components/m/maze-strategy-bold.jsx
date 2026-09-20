import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0q3n9bjy.css';
import '../../css/o/oi2dixb2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0q3n9bjy"/><path class="oi2dixb2x"/>`,
		"fallback": "streamline-ultimate:maze-strategy-bold",
	});
}

export default Component;
