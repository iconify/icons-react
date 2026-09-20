import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9fx7kb6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9fx7kb6v"/>`,
		"fallback": "uit:link-h",
	});
}

export default Component;
