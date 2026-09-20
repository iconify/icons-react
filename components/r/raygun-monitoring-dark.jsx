import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hradzg3vi.css';
import '../../css/n/norpj8pcf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hradzg3vi"/><path class="norpj8pcf"/>`,
		"fallback": "selfhst:raygun-monitoring-dark",
	});
}

export default Component;
