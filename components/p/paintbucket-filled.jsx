import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npf7jgx5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npf7jgx5v"/>`,
		"fallback": "reicon:paintbucket-filled",
	});
}

export default Component;
