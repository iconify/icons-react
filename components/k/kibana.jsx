import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsoqsbc0b.css';
import '../../css/l/lnu--6bbg.css';
import '../../css/k/k8u3_jxow.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsoqsbc0b"/><path class="lnu--6bbg"/><path class="k8u3_jxow"/>`,
		"fallback": "selfhst:kibana",
	});
}

export default Component;
