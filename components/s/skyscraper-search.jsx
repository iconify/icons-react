import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwuacpr-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwuacpr-d"/>`,
		"fallback": "noviair:skyscraper-search",
	});
}

export default Component;
