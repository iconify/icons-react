import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u92_avmsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u92_avmsp"/>`,
		"fallback": "healthicons:rural-post-alt-24px",
	});
}

export default Component;
