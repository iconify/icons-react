import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vru8ler2b.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vru8ler2b"/>`,
		"fallback": "fa6-solid:person-swimming",
	});
}

export default Component;
