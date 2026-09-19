import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7pm8bbki.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7pm8bbki"/>`,
		"fallback": "fa6-brands:periscope",
	});
}

export default Component;
