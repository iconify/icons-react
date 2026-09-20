import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dn2vfh7wv.css';
import '../../css/z/zz0fzfb8a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dn2vfh7wv"/><path clip-rule="evenodd" class="zz0fzfb8a"/></g>`,
		"fallback": "streamline-color:one-vesus-one-flat",
	});
}

export default Component;
