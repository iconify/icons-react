import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etp81e8xx.css';
import '../../css/s/smtmkz67c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etp81e8xx"/><path class="smtmkz67c"/>`,
		"fallback": "energy-icons:scrubber-20-bold",
	});
}

export default Component;
