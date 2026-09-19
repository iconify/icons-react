import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqic_w44i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqic_w44i"/>`,
		"fallback": "game-icons:wavy-chains",
	});
}

export default Component;
