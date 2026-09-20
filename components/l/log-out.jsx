import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4r5-ok7c.css';
import '../../css/a/an49idj0x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4r5-ok7c"/><path class="an49idj0x"/>`,
		"fallback": "nimbus:log-out",
	});
}

export default Component;
