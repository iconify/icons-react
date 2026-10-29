import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nt3a1iz-v.css';
import '../../css/h/huhyiebpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nt3a1iz-v"/><path class="huhyiebpf"/>`,
		"fallback": "withicons-bauhaus:navigation",
	});
}

export default Component;
