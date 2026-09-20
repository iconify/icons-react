import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7ejmibhb.css';
import '../../css/z/z6i6gousf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7ejmibhb"/><path class="z6i6gousf"/>`,
		"fallback": "prime:video",
	});
}

export default Component;
