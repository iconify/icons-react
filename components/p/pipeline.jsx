import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icsgmp8vm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icsgmp8vm"/>`,
		"fallback": "material-icon-theme:pipeline",
	});
}

export default Component;
