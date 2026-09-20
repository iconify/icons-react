import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzku4xb3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzku4xb3v"/>`,
		"fallback": "tabler:umbrella-closed",
	});
}

export default Component;
