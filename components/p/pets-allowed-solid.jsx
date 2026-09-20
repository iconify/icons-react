import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv7vak98b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hv7vak98b"/>`,
		"fallback": "streamline-sharp:pets-allowed-solid",
	});
}

export default Component;
