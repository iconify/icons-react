import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgn1vdb5j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgn1vdb5j"/>`,
		"fallback": "selfhst:onetime-secret-dark",
	});
}

export default Component;
