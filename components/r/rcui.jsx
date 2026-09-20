import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbfficpwu.css';

const viewBox = {"width":1280,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbfficpwu"/>`,
		"fallback": "thesvg-color:rcui",
	});
}

export default Component;
