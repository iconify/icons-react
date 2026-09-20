import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm8y8pmpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm8y8pmpo"/>`,
		"fallback": "tabler:row-insert-top",
	});
}

export default Component;
