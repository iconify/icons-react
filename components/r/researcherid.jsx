import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kg8lg1b6s.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kg8lg1b6s"/>`,
		"fallback": "academicons:researcherid",
	});
}

export default Component;
