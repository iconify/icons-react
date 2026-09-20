import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df1snmbgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="df1snmbgt"/>`,
		"fallback": "solar:tennis-2-bold",
	});
}

export default Component;
