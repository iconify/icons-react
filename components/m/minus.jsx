import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpmurq.css';
import '../../css/s/so-from-16.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpmurq"/>`,
		"fallback": "line-md:minus",
	});
}

export default Component;
