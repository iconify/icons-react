import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecm4zwbye.css';
import '../../css/i/i23hwnb1g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecm4zwbye"/><path class="i23hwnb1g"/>`,
		"fallback": "energy-icons:tablet-48-bold",
	});
}

export default Component;
