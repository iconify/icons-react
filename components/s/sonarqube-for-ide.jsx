import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqq5v3bjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqq5v3bjs"/>`,
		"fallback": "thesvg:sonarqube-for-ide",
	});
}

export default Component;
