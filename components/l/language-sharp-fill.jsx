import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rna-lgb3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rna-lgb3o"/>`,
		"fallback": "keyline-icons:language-sharp-fill",
	});
}

export default Component;
