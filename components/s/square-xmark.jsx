import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmr0a4q_q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lmr0a4q_q"/>`,
		"fallback": "gravity-ui:square-xmark",
	});
}

export default Component;
