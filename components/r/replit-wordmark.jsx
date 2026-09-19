import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8dwnefac.css';
import '../../css/v/vsi_9nbmv.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8dwnefac"/><path class="vsi_9nbmv"/>`,
		"fallback": "devicon:replit-wordmark",
	});
}

export default Component;
