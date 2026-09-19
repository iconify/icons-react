import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sni5zobtk.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sni5zobtk"/>`,
		"fallback": "dinkie-icons:podcast-small",
	});
}

export default Component;
