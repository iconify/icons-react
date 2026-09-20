import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dho1bnojv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dho1bnojv"/>`,
		"fallback": "tabler:number-38-small",
	});
}

export default Component;
