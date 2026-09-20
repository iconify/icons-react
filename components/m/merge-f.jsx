import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3hoj7_rq.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3hoj7_rq"/>`,
		"fallback": "jam:merge-f",
	});
}

export default Component;
