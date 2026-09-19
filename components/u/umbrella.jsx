import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am3kbiccg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="am3kbiccg"/>`,
		"fallback": "famicons:umbrella",
	});
}

export default Component;
