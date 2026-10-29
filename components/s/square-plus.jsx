import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqq7tyroa.css';
import '../../css/a/a-8u3piaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqq7tyroa wm-k"/><path class="a-8u3piaa wm-a"/>`,
		"fallback": "withicons-bauhaus:square-plus",
	});
}

export default Component;
