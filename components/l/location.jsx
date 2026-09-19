import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcny89buc.css';

const viewBox = {"width":586,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcny89buc"/>`,
		"fallback": "websymbol:location",
	});
}

export default Component;
