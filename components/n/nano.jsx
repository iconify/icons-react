import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zs0kbjd4a.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zs0kbjd4a"/>`,
		"fallback": "devicon:nano",
	});
}

export default Component;
