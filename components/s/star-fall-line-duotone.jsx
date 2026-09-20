import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/p-w3owbpc.css';
import '../../css/t/t2_4h2b9i.css';
import '../../css/l/lmlf25b-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="p-w3owbpc"/><path class="t2_4h2b9i"/><path class="lmlf25b-d"/></g>`,
		"fallback": "solar:star-fall-line-duotone",
	});
}

export default Component;
