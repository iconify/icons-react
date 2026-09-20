import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a804f_bji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a804f_bji"/>`,
		"fallback": "octicon:sync-24",
	});
}

export default Component;
