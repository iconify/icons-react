import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6l8xqbzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6l8xqbzw"/>`,
		"fallback": "reicon:music-note3-filled",
	});
}

export default Component;
