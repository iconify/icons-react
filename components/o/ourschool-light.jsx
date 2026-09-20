import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwhay-qcg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwhay-qcg"/>`,
		"fallback": "selfhst:ourschool-light",
	});
}

export default Component;
