import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nim_7djxm.css';
import '../../css/g/gfuuvl7et.css';
import '../../css/f/fme3m9bxm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nim_7djxm"/><path class="gfuuvl7et"/><path class="fme3m9bxm"/>`,
		"fallback": "selfhst:registry-console-dark",
	});
}

export default Component;
