import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izfv5sbqt.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izfv5sbqt"/>`,
		"fallback": "wi:owm-802",
	});
}

export default Component;
