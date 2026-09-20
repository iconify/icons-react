import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da99er92l.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da99er92l"/>`,
		"fallback": "wpf:repeat",
	});
}

export default Component;
