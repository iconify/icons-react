import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbll2ccxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wbll2ccxa"/>`,
		"fallback": "gg:path-front",
	});
}

export default Component;
