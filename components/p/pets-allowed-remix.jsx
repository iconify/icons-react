import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z06ct1bdc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z06ct1bdc"/>`,
		"fallback": "streamline:pets-allowed-remix",
	});
}

export default Component;
