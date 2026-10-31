import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb2cdnyjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sb2cdnyjy"/>`,
		"fallback": "coolicons:layout-bento-fill-round",
	});
}

export default Component;
