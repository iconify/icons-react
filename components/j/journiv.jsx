import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/feh17ircu.css';
import '../../css/v/vbxcdz47q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="feh17ircu"/><path class="vbxcdz47q"/>`,
		"fallback": "selfhst:journiv",
	});
}

export default Component;
