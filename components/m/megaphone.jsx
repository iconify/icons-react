import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_7jlsb2y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_7jlsb2y"/>`,
		"fallback": "octicon:megaphone",
	});
}

export default Component;
