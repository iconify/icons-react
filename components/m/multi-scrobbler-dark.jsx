import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfn1x9uow.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfn1x9uow"/>`,
		"fallback": "selfhst:multi-scrobbler-dark",
	});
}

export default Component;
