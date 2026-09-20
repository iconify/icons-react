import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l19hjacna.css';
import '../../css/p/pfrgpji_f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l19hjacna"/><path class="pfrgpji_f"/>`,
		"fallback": "selfhst:wapy-dev-dark",
	});
}

export default Component;
