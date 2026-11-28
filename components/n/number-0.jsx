import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnc1wrb5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnc1wrb5i"/>`,
		"fallback": "iconaut:number-0",
	});
}

export default Component;
