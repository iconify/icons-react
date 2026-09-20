import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3pdm5vqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u3pdm5vqk"/>`,
		"fallback": "si:south-west-circle-fill",
	});
}

export default Component;
