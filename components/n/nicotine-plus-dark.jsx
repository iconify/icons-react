import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1fuo1lvj.css';
import '../../css/s/sj_lllbpr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1fuo1lvj"/><path class="sj_lllbpr"/>`,
		"fallback": "selfhst:nicotine-plus-dark",
	});
}

export default Component;
