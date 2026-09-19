import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/he82iqb8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="he82iqb8p"/>`,
		"fallback": "cbi:porsche",
	});
}

export default Component;
