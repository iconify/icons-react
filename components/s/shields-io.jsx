import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfwq3cbmt.css';
import '../../css/b/b8_9rtbiy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfwq3cbmt"/><path class="b8_9rtbiy"/>`,
		"fallback": "selfhst:shields-io",
	});
}

export default Component;
