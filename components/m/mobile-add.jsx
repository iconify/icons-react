import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi1fgqnbj.css';
import '../../css/f/fqpkdbsbh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi1fgqnbj"/><path class="fqpkdbsbh"/>`,
		"fallback": "carbon:mobile-add",
	});
}

export default Component;
