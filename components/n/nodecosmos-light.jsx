import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8r2o0cup.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8r2o0cup"/>`,
		"fallback": "selfhst:nodecosmos-light",
	});
}

export default Component;
