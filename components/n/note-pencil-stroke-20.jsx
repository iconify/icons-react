import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rs40jpbkq.css';
import '../../css/r/r5w09bcrv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rs40jpbkq"/><path class="r5w09bcrv"/>`,
		"fallback": "garden:note-pencil-stroke-20",
	});
}

export default Component;
