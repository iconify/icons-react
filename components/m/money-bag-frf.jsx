import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcq6pcbyh.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcq6pcbyh"/>`,
		"fallback": "dinkie-icons:money-bag-frf",
	});
}

export default Component;
