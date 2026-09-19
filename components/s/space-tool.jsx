import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2ljqbzto.css';

const viewBox = {"width":2000,"height":2000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2ljqbzto"/>`,
		"fallback": "bpmn:space-tool",
	});
}

export default Component;
