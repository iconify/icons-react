import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agc2edjjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agc2edjjs"/>`,
		"fallback": "tabler:navigation-west",
	});
}

export default Component;
