import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcu6m8bip.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcu6m8bip"/>`,
		"fallback": "f7:table",
	});
}

export default Component;
