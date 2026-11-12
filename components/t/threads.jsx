import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gra6c-g-j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gra6c-g-j"/>`,
		"fallback": "selfhst:threads",
	});
}

export default Component;
