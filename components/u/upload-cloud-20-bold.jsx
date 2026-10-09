import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3ezex0cb.css';
import '../../css/h/hldpdtbpd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3ezex0cb"/><path class="hldpdtbpd"/>`,
		"fallback": "energy-icons:upload-cloud-20-bold",
	});
}

export default Component;
