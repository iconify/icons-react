import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjs2o5y2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjs2o5y2t"/>`,
		"fallback": "thesvg-color:upstage",
	});
}

export default Component;
