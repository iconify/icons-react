import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkv3chbzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkv3chbzp"/>`,
		"fallback": "tdesign:seal-filled",
	});
}

export default Component;
