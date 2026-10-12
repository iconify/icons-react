import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bn_uf6bnc.css';
import '../../css/i/ivhxmubfa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bn_uf6bnc"/><path class="ivhxmubfa"/>`,
		"fallback": "garden:person-check-fill-20",
	});
}

export default Component;
