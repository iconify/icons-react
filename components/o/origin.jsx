import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_p47zbfq.css';

const viewBox = {"width":18,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_p47zbfq"/>`,
		"fallback": "fontisto:origin",
	});
}

export default Component;
