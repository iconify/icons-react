import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebnm_jb3t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebnm_jb3t"/>`,
		"fallback": "game-icons:mussel",
	});
}

export default Component;
