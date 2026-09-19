import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp1vvgsyv.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sp1vvgsyv"/>`,
		"fallback": "f7:rectangle-stack-fill",
	});
}

export default Component;
