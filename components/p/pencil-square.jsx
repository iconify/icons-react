import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnixj-hrc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lnixj-hrc"/>`,
		"fallback": "heroicons-solid:pencil-square",
	});
}

export default Component;
