import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvhbzqbha.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vvhbzqbha"/>`,
		"fallback": "streamline-flex:shield-1-solid",
	});
}

export default Component;
