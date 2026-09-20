import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk28uebus.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fk28uebus"/>`,
		"fallback": "wpf:keepdry",
	});
}

export default Component;
