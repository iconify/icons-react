import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdh4pbbmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdh4pbbmp"/>`,
		"fallback": "tabler:number-95-small",
	});
}

export default Component;
