import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx93v9xsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx93v9xsw"/>`,
		"fallback": "solar:paperclip-rounded-2-broken",
	});
}

export default Component;
