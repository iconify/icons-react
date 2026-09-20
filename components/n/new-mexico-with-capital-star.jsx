import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msj6vhb3f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msj6vhb3f"/>`,
		"fallback": "pinhead:new-mexico-with-capital-star",
	});
}

export default Component;
