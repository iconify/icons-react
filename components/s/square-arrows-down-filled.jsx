import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujl_nsbmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ujl_nsbmv"/>`,
		"fallback": "reicon:square-arrows-down-filled",
	});
}

export default Component;
