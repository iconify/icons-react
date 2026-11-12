import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svh25cwvl.css';
import '../../css/m/m4c7wqb2i.css';
import '../../css/m/mqymo7s1u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svh25cwvl"/><path class="m4c7wqb2i"/><path class="mqymo7s1u"/>`,
		"fallback": "selfhst:radicle-light",
	});
}

export default Component;
