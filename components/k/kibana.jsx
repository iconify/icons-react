import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwr_9_bdu.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xwr_9_bdu"/>`,
		"fallback": "devicon-plain:kibana",
	});
}

export default Component;
