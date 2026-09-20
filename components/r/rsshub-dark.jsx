import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojv1hdbuc.css';
import '../../css/a/ab03k5swc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojv1hdbuc"/><path class="ab03k5swc"/>`,
		"fallback": "selfhst:rsshub-dark",
	});
}

export default Component;
