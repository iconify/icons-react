import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkanf8r8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkanf8r8p"/>`,
		"fallback": "tabler:number-25-small",
	});
}

export default Component;
