import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlnshvmru.css';
import '../../css/p/paw_-0u1j.css';
import '../../css/u/uc8gne65u.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlnshvmru"/><path class="paw_-0u1j"/><path class="uc8gne65u"/>`,
		"fallback": "devicon:mysql-wordmark",
	});
}

export default Component;
