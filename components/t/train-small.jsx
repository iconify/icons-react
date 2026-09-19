import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahkp4zb2y.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahkp4zb2y"/>`,
		"fallback": "dinkie-icons:train-small",
	});
}

export default Component;
