import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_8ipno6c.css';
import '../../css/i/iaquidtow.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_8ipno6c"/><path class="iaquidtow"/>`,
		"fallback": "energy-icons:mail-open-48",
	});
}

export default Component;
