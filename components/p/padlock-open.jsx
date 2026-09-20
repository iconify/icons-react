import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ka3v7gmwc.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ka3v7gmwc"/>`,
		"fallback": "jam:padlock-open",
	});
}

export default Component;
