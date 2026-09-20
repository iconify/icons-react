import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7dwd_byp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7dwd_byp"/>`,
		"fallback": "thesvg-color:picartodottv",
	});
}

export default Component;
