import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/typj2ptvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="typj2ptvg"/>`,
		"fallback": "tabler:letter-a-small",
	});
}

export default Component;
