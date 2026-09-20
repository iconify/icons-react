import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umu-ixchk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umu-ixchk"/>`,
		"fallback": "tabler:number-1-small",
	});
}

export default Component;
