import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4ouod96n.css';
import '../../css/d/dcpdfk6aa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4ouod96n"/><path class="dcpdfk6aa"/>`,
		"fallback": "token:pivx",
	});
}

export default Component;
