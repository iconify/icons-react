import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rylgiac4g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rylgiac4g"/>`,
		"fallback": "streamline:online-medical-call-service-solid",
	});
}

export default Component;
