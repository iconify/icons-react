import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zovel4bbo.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zovel4bbo"/>`,
		"fallback": "dinkie-icons:uni8279-circled-filled",
	});
}

export default Component;
