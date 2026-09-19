import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnfmk4bpf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnfmk4bpf"/>`,
		"fallback": "icon-park-outline:square-small",
	});
}

export default Component;
