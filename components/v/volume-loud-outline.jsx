import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/quiooc0jc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="quiooc0jc"/>`,
		"fallback": "solar:volume-loud-outline",
	});
}

export default Component;
