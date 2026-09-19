import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6i4h2b2j.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6i4h2b2j"/>`,
		"fallback": "fluent-mdl2:number",
	});
}

export default Component;
