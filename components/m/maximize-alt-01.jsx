import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2gv-r6vv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k2gv-r6vv"/>`,
		"fallback": "griddy-icons:maximize-alt-01",
	});
}

export default Component;
