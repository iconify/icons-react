import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlcb74b2i.css';
import '../../css/n/nlxy_dbcm.css';
import '../../css/m/moq4ohbbo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlcb74b2i"/><path class="nlxy_dbcm"/><path class="moq4ohbbo"/>`,
		"fallback": "selfhst:kometa",
	});
}

export default Component;
