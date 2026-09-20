import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpayq2cbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpayq2cbh"/>`,
		"fallback": "thesvg:osu",
	});
}

export default Component;
