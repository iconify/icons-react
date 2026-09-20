import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb9hgyngx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb9hgyngx"/>`,
		"fallback": "pinhead:three-dogs-wearing-collars",
	});
}

export default Component;
