import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lawvqw21q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lawvqw21q"/>`,
		"fallback": "streamline:interface-arrows-expand-2-expand-smaller-retract-bigger-big-small-diagonal",
	});
}

export default Component;
