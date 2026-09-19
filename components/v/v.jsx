import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmqi-0gnp.css';

const viewBox = {"width":497,"height":667};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmqi-0gnp"/>`,
		"fallback": "ls:v",
	});
}

export default Component;
