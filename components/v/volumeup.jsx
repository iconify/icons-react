import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aigqoeosf.css';
import '../../css/l/lzd14vb-z.css';

const viewBox = {"width":16,"height":13};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aigqoeosf"/><path class="lzd14vb-z"/>`,
		"fallback": "formkit:volumeup",
	});
}

export default Component;
