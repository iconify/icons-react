import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbgflfbhe.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbgflfbhe"/>`,
		"fallback": "dinkie-icons:three-button-mouse-alt",
	});
}

export default Component;
