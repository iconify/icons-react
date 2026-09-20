import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr1ba6b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="fr1ba6b2l"/>`,
		"fallback": "meteor-icons:mobile",
	});
}

export default Component;
