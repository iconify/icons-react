import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq8qvx7lw.css';

const viewBox = {"width":300,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq8qvx7lw"/>`,
		"fallback": "material-icon-theme:semantic-release",
	});
}

export default Component;
