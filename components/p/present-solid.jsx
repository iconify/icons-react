import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmsdlybyh.css';
import '../../css/u/ulimznb4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tmsdlybyh"/><path class="ulimznb4s"/>`,
		"fallback": "basil:present-solid",
	});
}

export default Component;
