import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbu94sbqh.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbu94sbqh"/>`,
		"fallback": "devicon-plain:mysql-wordmark",
	});
}

export default Component;
