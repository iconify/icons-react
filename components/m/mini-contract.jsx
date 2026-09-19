import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzyta9bat.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzyta9bat"/>`,
		"fallback": "fluent-mdl2:mini-contract",
	});
}

export default Component;
