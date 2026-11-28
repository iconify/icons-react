import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uk3u-db7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uk3u-db7b"/>`,
		"fallback": "noviair-light:settings-x",
	});
}

export default Component;
