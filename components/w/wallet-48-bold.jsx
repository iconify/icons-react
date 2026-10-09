import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1gq8obfz.css';
import '../../css/v/vil7ki9ez.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1gq8obfz"/><path class="vil7ki9ez"/>`,
		"fallback": "energy-icons:wallet-48-bold",
	});
}

export default Component;
