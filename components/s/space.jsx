import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spvai9bax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spvai9bax"/>`,
		"fallback": "iconaut:space",
	});
}

export default Component;
