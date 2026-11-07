import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntwgq1b2y.css';
import '../../css/y/yib8xibaw.css';
import '../../css/w/wrbn_p02x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntwgq1b2y"/><path class="yib8xibaw"/><path clip-rule="evenodd" class="wrbn_p02x"/>`,
		"fallback": "solar:panels-bottom-left-bold",
	});
}

export default Component;
