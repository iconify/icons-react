import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sj29iu_gy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sj29iu_gy"/>`,
		"fallback": "ix:redo",
	});
}

export default Component;
