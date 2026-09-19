import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d08ecwr6l.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d08ecwr6l"/>`,
		"fallback": "devicon:mariadb",
	});
}

export default Component;
