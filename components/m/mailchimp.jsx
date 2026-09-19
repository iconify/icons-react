import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzmadub0j.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzmadub0j"/>`,
		"fallback": "fa-brands:mailchimp",
	});
}

export default Component;
