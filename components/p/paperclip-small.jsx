import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xb5yemjxa.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xb5yemjxa"/>`,
		"fallback": "dinkie-icons:paperclip-small",
	});
}

export default Component;
