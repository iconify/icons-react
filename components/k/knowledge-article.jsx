import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlegls60l.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlegls60l"/>`,
		"fallback": "fluent-mdl2:knowledge-article",
	});
}

export default Component;
