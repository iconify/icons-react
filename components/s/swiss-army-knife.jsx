import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd8oh8xxk.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd8oh8xxk"/>`,
		"fallback": "wpf:swiss-army-knife",
	});
}

export default Component;
