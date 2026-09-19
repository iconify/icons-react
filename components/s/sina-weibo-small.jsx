import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0grz6btw.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0grz6btw"/>`,
		"fallback": "dinkie-icons:sina-weibo-small",
	});
}

export default Component;
