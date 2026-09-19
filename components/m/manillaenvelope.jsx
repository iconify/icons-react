import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0msh_vzg.css';

const viewBox = {"width":833,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0msh_vzg"/>`,
		"fallback": "whh:manillaenvelope",
	});
}

export default Component;
