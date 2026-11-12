import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kaad2k6uy.css';
import '../../css/z/zvcyosrjy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kaad2k6uy"/><path class="zvcyosrjy"/>`,
		"fallback": "selfhst:planka-dark",
	});
}

export default Component;
