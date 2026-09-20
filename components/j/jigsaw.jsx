import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9zy28jua.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n9zy28jua"/>`,
		"fallback": "ix:jigsaw",
	});
}

export default Component;
