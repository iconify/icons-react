import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fln_4q79i.css';
import '../../css/m/m3_jbieof.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fln_4q79i"/><path class="m3_jbieof"/>`,
		"fallback": "selfhst:sure-finance",
	});
}

export default Component;
