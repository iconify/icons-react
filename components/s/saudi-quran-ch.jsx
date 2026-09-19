import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zi_4xcbzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zi_4xcbzm"/>`,
		"fallback": "cbi:saudi-quran-ch",
	});
}

export default Component;
