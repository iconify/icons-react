import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5mqmsbgz.css';
import '../../css/j/juxduqi5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5mqmsbgz"/><path clip-rule="evenodd" class="juxduqi5b"/>`,
		"fallback": "si:view-compact-fill",
	});
}

export default Component;
