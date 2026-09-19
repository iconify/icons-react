import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vatk52b6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vatk52b6g"/>`,
		"fallback": "gcp:migrate-for-compute-engine",
	});
}

export default Component;
