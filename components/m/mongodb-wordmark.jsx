import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khnqrjkad.css';
import '../../css/u/ukv9p-tgw.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khnqrjkad"/><path class="ukv9p-tgw"/>`,
		"fallback": "devicon:mongodb-wordmark",
	});
}

export default Component;
