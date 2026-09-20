import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ooev40plq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ooev40plq"/>`,
		"fallback": "thesvg-color:opentext",
	});
}

export default Component;
