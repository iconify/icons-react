import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf43dzb5n.css';

const viewBox = {"width":462.9,"height":462.9};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uf43dzb5n"/>`,
		"fallback": "selfhst:intervals-icu-light",
	});
}

export default Component;
