import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibq2rdfwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ibq2rdfwv"/>`,
		"fallback": "si:search-alt-fill",
	});
}

export default Component;
