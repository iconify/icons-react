import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq7duib7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq7duib7h"/>`,
		"fallback": "mage:settings-fill",
	});
}

export default Component;
