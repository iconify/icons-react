import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ku3j7y3ue.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ku3j7y3ue"/>`,
		"fallback": "pinhead:pixel-arrows-left-right-above-water",
	});
}

export default Component;
