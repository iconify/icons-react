import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x73g-fbxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x73g-fbxv"/>`,
		"fallback": "griddy-icons:lock-open-alt-01",
	});
}

export default Component;
