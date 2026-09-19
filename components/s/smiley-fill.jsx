import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfec_rb8a.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfec_rb8a"/>`,
		"fallback": "f7:smiley-fill",
	});
}

export default Component;
