import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dn-6xjbzp.css';
import '../../css/t/tk3rezb0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="dn-6xjbzp"/><path class="tk3rezb0l"/>`,
		"fallback": "eos-icons:primitive",
	});
}

export default Component;
