import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgjpb0q-d.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgjpb0q-d"/>`,
		"fallback": "f7:rectangle-arrow-up-right-arrow-down-left",
	});
}

export default Component;
