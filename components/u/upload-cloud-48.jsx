import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn0n17h7c.css';
import '../../css/b/b51sehbna.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn0n17h7c"/><path class="b51sehbna"/>`,
		"fallback": "energy-icons:upload-cloud-48",
	});
}

export default Component;
