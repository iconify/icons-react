import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj588pbsy.css';
import '../../css/l/l10hz5bmh.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mj588pbsy"/><path class="l10hz5bmh"/>`,
		"fallback": "devicon:traefikproxy-wordmark",
	});
}

export default Component;
