import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/ymvwx9bwb.css';
import '../../css/k/kl28osk6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ymvwx9bwb"/><path class="kl28osk6u"/></g>`,
		"fallback": "streamline-sharp:logout-2-solid",
	});
}

export default Component;
