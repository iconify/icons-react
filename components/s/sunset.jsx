import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o91sm0_iw.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o91sm0_iw"/>`,
		"fallback": "f7:sunset",
	});
}

export default Component;
