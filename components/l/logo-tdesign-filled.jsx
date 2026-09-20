import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpa83o-uf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpa83o-uf"/>`,
		"fallback": "tdesign:logo-tdesign-filled",
	});
}

export default Component;
