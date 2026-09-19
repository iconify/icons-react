import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgg2hac1f.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgg2hac1f"/>`,
		"fallback": "devicon-plain:opencv",
	});
}

export default Component;
