import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmytes_jh.css';
import '../../css/x/x41xvfi0c.css';
import '../../css/z/z79g45bsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmytes_jh"/><path class="x41xvfi0c"/><path clip-rule="evenodd" class="z79g45bsu"/>`,
		"fallback": "solar:question-square-outline",
	});
}

export default Component;
