import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ks6--tb3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ks6--tb3s"/>`,
		"fallback": "covid:personal-hygiene-hand-soap-1",
	});
}

export default Component;
