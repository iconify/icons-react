import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugsr7ob4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugsr7ob4b"/>`,
		"fallback": "tabler:skew-y",
	});
}

export default Component;
