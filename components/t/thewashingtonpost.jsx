import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-wsdua2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-wsdua2l"/>`,
		"fallback": "simple-icons:thewashingtonpost",
	});
}

export default Component;
