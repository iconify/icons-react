import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/feeids0fq.css';
import '../../css/w/whujt0lbg.css';
import '../../css/s/sjk5febne.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="feeids0fq"/><path class="whujt0lbg"/><path class="sjk5febne"/>`,
		"fallback": "energy-icons:repeat-48-bold",
	});
}

export default Component;
