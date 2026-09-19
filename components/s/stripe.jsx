import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv-xx4z6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv-xx4z6f"/>`,
		"fallback": "grommet-icons:stripe",
	});
}

export default Component;
