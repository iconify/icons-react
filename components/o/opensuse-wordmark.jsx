import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/easitdb1p.css';
import '../../css/l/lndkxrb9v.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="easitdb1p"/><path class="lndkxrb9v"/>`,
		"fallback": "devicon-plain:opensuse-wordmark",
	});
}

export default Component;
