import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fip4tbboc.css';
import '../../css/h/h_eof1loy.css';
import '../../css/t/tmtoxorob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="fip4tbboc"/><path class="h_eof1loy"/><path class="tmtoxorob"/></g>`,
		"fallback": "withicons-bauhaus:shovel",
	});
}

export default Component;
