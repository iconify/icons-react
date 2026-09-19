import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eer4ttwsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eer4ttwsv"/>`,
		"fallback": "bxs:store",
	});
}

export default Component;
