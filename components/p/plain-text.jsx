import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xly2t3apw.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xly2t3apw"/>`,
		"fallback": "fluent-mdl2:plain-text",
	});
}

export default Component;
