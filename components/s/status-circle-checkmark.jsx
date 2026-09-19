import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti76fbtof.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti76fbtof"/>`,
		"fallback": "fluent-mdl2:status-circle-checkmark",
	});
}

export default Component;
