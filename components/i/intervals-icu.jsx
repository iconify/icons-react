import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcdlw7auy.css';
import '../../css/s/s_jmxibuk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="kcdlw7auy"/><path class="s_jmxibuk"/>`,
		"fallback": "selfhst:intervals-icu",
	});
}

export default Component;
