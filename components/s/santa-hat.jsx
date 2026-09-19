import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6yzs0btw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6yzs0btw"/>`,
		"fallback": "game-icons:santa-hat",
	});
}

export default Component;
