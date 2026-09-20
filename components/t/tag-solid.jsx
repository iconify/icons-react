import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxbj98b1d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lxbj98b1d"/>`,
		"fallback": "streamline-flex:tag-solid",
	});
}

export default Component;
