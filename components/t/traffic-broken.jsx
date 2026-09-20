import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/izwsa0kiq.css';
import '../../css/g/g9i31fsft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="izwsa0kiq"/><path class="g9i31fsft"/></g>`,
		"fallback": "solar:traffic-broken",
	});
}

export default Component;
