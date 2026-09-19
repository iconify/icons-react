import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djr264bkf.css';
import '../../css/k/kb4k8nblj.css';
import '../../css/c/c0pinfbcc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djr264bkf"/><path class="kb4k8nblj"/><path class="c0pinfbcc"/>`,
		"fallback": "ion:more",
	});
}

export default Component;
