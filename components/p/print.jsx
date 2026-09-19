import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5ds6_93y.css';
import '../../css/f/fkgg8p-2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5ds6_93y"/><path class="fkgg8p-2i"/>`,
		"fallback": "fontisto:print",
	});
}

export default Component;
