import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdn-dqb9y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdn-dqb9y"/>`,
		"fallback": "pinhead:leg",
	});
}

export default Component;
