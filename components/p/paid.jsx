import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdu0sgbzx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdu0sgbzx"/>`,
		"fallback": "wpf:paid",
	});
}

export default Component;
