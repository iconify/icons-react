import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpg09-1kw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpg09-1kw"/>`,
		"fallback": "tabler:transaction-yuan",
	});
}

export default Component;
