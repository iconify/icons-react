import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqbqpubif.css';
import '../../css/j/j9a_vpb3t.css';

const viewBox = {"width":263.33,"height":173.53};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqbqpubif"/><ellipse class="j9a_vpb3t"/>`,
		"fallback": "thesvg-color:rybbit-dark",
	});
}

export default Component;
