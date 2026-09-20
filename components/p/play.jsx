import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adnoxa.css';
import '../../css/s/so-from-38.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adnoxa"/>`,
		"fallback": "line-md:play",
	});
}

export default Component;
