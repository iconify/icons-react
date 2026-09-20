import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2e3knbpj.css';
import '../../css/n/n38mbh-2w.css';
import '../../css/l/lm2ism19n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2e3knbpj"/><path class="n38mbh-2w"/><path class="lm2ism19n"/>`,
		"fallback": "selfhst:metatana",
	});
}

export default Component;
