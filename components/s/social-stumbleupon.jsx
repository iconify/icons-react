import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5_uczi6x.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5_uczi6x"/>`,
		"fallback": "simple-line-icons:social-stumbleupon",
	});
}

export default Component;
