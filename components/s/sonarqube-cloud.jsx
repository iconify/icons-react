import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enih07b1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enih07b1w"/>`,
		"fallback": "thesvg-color:sonarqube-cloud",
	});
}

export default Component;
