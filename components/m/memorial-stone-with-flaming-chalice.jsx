import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/my4lljgxa.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="my4lljgxa"/>`,
		"fallback": "pinhead:memorial-stone-with-flaming-chalice",
	});
}

export default Component;
