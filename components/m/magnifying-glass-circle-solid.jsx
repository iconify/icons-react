import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv5chqbxs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rv5chqbxs"/>`,
		"fallback": "streamline:magnifying-glass-circle-solid",
	});
}

export default Component;
