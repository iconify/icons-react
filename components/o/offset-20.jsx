import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oix55f0zb.css';
import '../../css/z/zpidxlb0a.css';
import '../../css/i/ivx8nobtg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oix55f0zb"/><path class="zpidxlb0a"/><path class="ivx8nobtg"/>`,
		"fallback": "energy-icons:offset-20",
	});
}

export default Component;
