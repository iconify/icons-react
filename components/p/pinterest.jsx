import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2l6otbtr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2l6otbtr"/>`,
		"fallback": "entypo-social:pinterest",
	});
}

export default Component;
