import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp6ykob9m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp6ykob9m"/>`,
		"fallback": "pinhead:pixel-arrows-left-right",
	});
}

export default Component;
