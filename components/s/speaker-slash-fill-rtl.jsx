import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm_ngjbde.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm_ngjbde"/>`,
		"fallback": "f7:speaker-slash-fill-rtl",
	});
}

export default Component;
