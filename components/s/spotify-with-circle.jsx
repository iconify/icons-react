import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/be88_obth.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="be88_obth"/>`,
		"fallback": "entypo-social:spotify-with-circle",
	});
}

export default Component;
