import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eym_g24ps.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eym_g24ps"/>`,
		"fallback": "dinkie-icons:milk-package-small",
	});
}

export default Component;
