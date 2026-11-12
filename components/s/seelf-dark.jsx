import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wddu7jbzp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wddu7jbzp"/>`,
		"fallback": "selfhst:seelf-dark",
	});
}

export default Component;
