import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcnrjmbej.css';

const viewBox = {"width":654,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcnrjmbej"/>`,
		"fallback": "websymbol:right-open",
	});
}

export default Component;
