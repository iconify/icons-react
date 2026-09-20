import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5dwkmnlz.css';
import '../../css/w/w50wxabok.css';
import '../../css/g/gdzqqzccu.css';

const viewBox = {"width":1104,"height":1104};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5dwkmnlz"/><path class="w50wxabok"/><path class="gdzqqzccu"/>`,
		"fallback": "thesvg-color:visernic",
	});
}

export default Component;
