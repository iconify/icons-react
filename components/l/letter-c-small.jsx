import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_1c3bbdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_1c3bbdl"/>`,
		"fallback": "tabler:letter-c-small",
	});
}

export default Component;
