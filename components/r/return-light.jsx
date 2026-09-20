import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlr5s3veu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlr5s3veu"/>`,
		"fallback": "lets-icons:return-light",
	});
}

export default Component;
