import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmn3w7obp.css';

const viewBox = {"width":305,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmn3w7obp"/>`,
		"fallback": "file-icons:leiningen",
	});
}

export default Component;
