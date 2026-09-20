import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7oixqbxu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7oixqbxu"/>`,
		"fallback": "streamline-flex:volume-mute",
	});
}

export default Component;
