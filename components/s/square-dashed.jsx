import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afo9k_fki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afo9k_fki"/>`,
		"fallback": "withicons-bauhaus:square-dashed",
	});
}

export default Component;
