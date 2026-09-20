import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktkntsc1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktkntsc1b"/>`,
		"fallback": "thesvg-color:roots-bedrock",
	});
}

export default Component;
