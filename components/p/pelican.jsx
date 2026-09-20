import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8syhz-ot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8syhz-ot"/>`,
		"fallback": "simple-icons:pelican",
	});
}

export default Component;
