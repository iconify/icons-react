import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgmq7_xxu.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgmq7_xxu"/>`,
		"fallback": "devicon-plain:logstash",
	});
}

export default Component;
