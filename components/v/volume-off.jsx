import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckn_rwb0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckn_rwb0g"/>`,
		"fallback": "vadivam:volume-off",
	});
}

export default Component;
