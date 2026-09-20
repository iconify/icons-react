import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojldz2bdb.css';
import '../../css/e/ee089sbds.css';
import '../../css/o/os-6ceb3t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojldz2bdb"/><path class="ee089sbds"/><path class="os-6ceb3t"/>`,
		"fallback": "selfhst:stirling-pdf-dark",
	});
}

export default Component;
