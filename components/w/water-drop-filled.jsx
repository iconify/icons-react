import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf_hh-lha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tf_hh-lha"/>`,
		"fallback": "griddy-icons:water-drop-filled",
	});
}

export default Component;
