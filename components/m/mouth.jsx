import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie3zfmbgw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie3zfmbgw"/>`,
		"fallback": "icon-park-outline:mouth",
	});
}

export default Component;
