import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/coc-1sbkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="coc-1sbkx"/>`,
		"fallback": "thesvg:sonarqube-cloud",
	});
}

export default Component;
