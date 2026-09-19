import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szppspbup.css';

const viewBox = {"width":2304,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szppspbup"/>`,
		"fallback": "fa:mixcloud",
	});
}

export default Component;
