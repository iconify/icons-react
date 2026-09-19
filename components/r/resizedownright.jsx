import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd-mgyb2c.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd-mgyb2c"/>`,
		"fallback": "whh:resizedownright",
	});
}

export default Component;
