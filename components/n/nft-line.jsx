import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvt7osz7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvt7osz7g"/>`,
		"fallback": "ri:nft-line",
	});
}

export default Component;
