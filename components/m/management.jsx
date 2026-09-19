import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovwjgdbqw.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovwjgdbqw"/>`,
		"fallback": "ep:management",
	});
}

export default Component;
