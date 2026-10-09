import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0tdvpgiq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0tdvpgiq"/>`,
		"fallback": "energy-icons:road-48",
	});
}

export default Component;
