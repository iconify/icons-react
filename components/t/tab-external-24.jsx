import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-lz6bbgg.css';
import '../../css/f/fewj64b-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-lz6bbgg"/><path class="fewj64b-i"/>`,
		"fallback": "octicon:tab-external-24",
	});
}

export default Component;
