import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9y477w0i.css';
import '../../css/o/ov-0mlbnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="n9y477w0i"/><path class="ov-0mlbnw"/>`,
		"fallback": "solar:rounded-magnifier-bold-duotone",
	});
}

export default Component;
