import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rs2p5x73g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rs2p5x73g"/>`,
		"fallback": "meteor-icons:preact",
	});
}

export default Component;
