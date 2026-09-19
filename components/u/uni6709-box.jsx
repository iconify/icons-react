import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe5kl4b5l.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe5kl4b5l"/>`,
		"fallback": "dinkie-icons:uni6709-box",
	});
}

export default Component;
