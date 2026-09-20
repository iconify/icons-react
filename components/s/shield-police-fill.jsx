import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzyem1bpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xzyem1bpv"/>`,
		"fallback": "si:shield-police-fill",
	});
}

export default Component;
