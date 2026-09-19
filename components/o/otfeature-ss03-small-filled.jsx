import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnuadmb2o.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnuadmb2o"/>`,
		"fallback": "dinkie-icons:otfeature-ss03-small-filled",
	});
}

export default Component;
