import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxze5ab0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxze5ab0v"/>`,
		"fallback": "basil:settings-adjust-solid",
	});
}

export default Component;
