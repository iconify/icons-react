import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xuwh--krg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xuwh--krg"/>`,
		"fallback": "selfhst:nomad-travel-light",
	});
}

export default Component;
