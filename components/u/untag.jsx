import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp6cczbjv.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp6cczbjv"/>`,
		"fallback": "fluent-mdl2:untag",
	});
}

export default Component;
