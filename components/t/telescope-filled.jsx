import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnk09y7es.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bnk09y7es"/>`,
		"fallback": "griddy-icons:telescope-filled",
	});
}

export default Component;
