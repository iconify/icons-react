import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv-_es__f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qv-_es__f"/>`,
		"fallback": "streamline:shield-1",
	});
}

export default Component;
