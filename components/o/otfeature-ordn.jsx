import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnahbg_6d.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnahbg_6d"/>`,
		"fallback": "dinkie-icons:otfeature-ordn",
	});
}

export default Component;
