import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt-zv9ths.css';
import '../../css/u/uzucf_p2p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pt-zv9ths"/><path class="uzucf_p2p"/>`,
		"fallback": "carbon:user-avatar",
	});
}

export default Component;
