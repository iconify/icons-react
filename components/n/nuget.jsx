import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un-wte4cx.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="un-wte4cx"/>`,
		"fallback": "devicon:nuget",
	});
}

export default Component;
