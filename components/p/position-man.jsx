import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb02adbwv.css';
import '../../css/z/ze1a4qyku.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb02adbwv"/><path class="ze1a4qyku"/>`,
		"fallback": "gis:position-man",
	});
}

export default Component;
