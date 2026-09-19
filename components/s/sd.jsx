import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to8u9k8yb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="to8u9k8yb"/>`,
		"fallback": "grommet-icons:sd",
	});
}

export default Component;
