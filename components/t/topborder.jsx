import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owsd48blx.css';

const viewBox = {"width":960,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owsd48blx"/>`,
		"fallback": "whh:topborder",
	});
}

export default Component;
