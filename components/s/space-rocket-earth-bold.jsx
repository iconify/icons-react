import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm9liwb3f.css';
import '../../css/g/g451w2_7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm9liwb3f"/><path class="g451w2_7g"/>`,
		"fallback": "streamline-ultimate:space-rocket-earth-bold",
	});
}

export default Component;
