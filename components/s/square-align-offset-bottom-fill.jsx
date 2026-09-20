import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-fsf2rdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a-fsf2rdw"/>`,
		"fallback": "keyline-icons:square-align-offset-bottom-fill",
	});
}

export default Component;
