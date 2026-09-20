import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzxu6cbem.css';
import '../../css/l/l5bgdtbpm.css';
import '../../css/t/t9nocfb7t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzxu6cbem"/><path class="l5bgdtbpm"/><path class="t9nocfb7t"/>`,
		"fallback": "selfhst:microsoft-onedrive-dark",
	});
}

export default Component;
