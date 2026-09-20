import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmri_4b7b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmri_4b7b"/>`,
		"fallback": "selfhst:norish-light",
	});
}

export default Component;
