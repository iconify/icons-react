import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr_7g48pa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr_7g48pa"/>`,
		"fallback": "reicon:keyboard-open",
	});
}

export default Component;
