import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp7hmqnvg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp7hmqnvg"/>`,
		"fallback": "streamline-flex:screwdriver-wrench",
	});
}

export default Component;
