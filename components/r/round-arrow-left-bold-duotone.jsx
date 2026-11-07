import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu-cc3sah.css';
import '../../css/q/qrog0acqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu-cc3sah"/><path class="qrog0acqp"/>`,
		"fallback": "solar:round-arrow-left-bold-duotone",
	});
}

export default Component;
