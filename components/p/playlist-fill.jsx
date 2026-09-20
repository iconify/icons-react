import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5tb48bnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5tb48bnw"/>`,
		"fallback": "mage:playlist-fill",
	});
}

export default Component;
