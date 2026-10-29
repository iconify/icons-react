import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thj3mqbqh.css';
import '../../css/u/uqi_583re.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thj3mqbqh wm-k"/><path class="uqi_583re wm-a"/>`,
		"fallback": "withicons-bauhaus:subscript",
	});
}

export default Component;
