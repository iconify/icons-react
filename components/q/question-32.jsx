import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcqdxjb3l.css';
import '../../css/s/sk9-dtbox.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcqdxjb3l"/><path clip-rule="evenodd" class="sk9-dtbox"/>`,
		"fallback": "qlementine-icons:question-32",
	});
}

export default Component;
