import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5ixd2b5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5ixd2b5t"/>`,
		"fallback": "cbi:sauna-bucket",
	});
}

export default Component;
