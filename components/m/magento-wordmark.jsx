import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9gx0vbsu.css';
import '../../css/k/kphlzacfd.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9gx0vbsu"/><path class="kphlzacfd"/>`,
		"fallback": "devicon:magento-wordmark",
	});
}

export default Component;
