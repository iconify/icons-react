import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v25mscwtj.css';
import '../../css/y/ywqsk4bnp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v25mscwtj"/><path class="ywqsk4bnp"/>`,
		"fallback": "selfhst:kanboard",
	});
}

export default Component;
