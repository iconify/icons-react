import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqspvlzll.css';
import '../../css/s/sppq3wb1p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqspvlzll"/><path class="sppq3wb1p"/>`,
		"fallback": "selfhst:meshtastic",
	});
}

export default Component;
