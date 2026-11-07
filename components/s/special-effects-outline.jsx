import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwfimpi9y.css';
import '../../css/z/z7wf0rbgy.css';
import '../../css/g/g4e643m4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwfimpi9y"/><path class="z7wf0rbgy"/><path clip-rule="evenodd" class="g4e643m4g"/>`,
		"fallback": "solar:special-effects-outline",
	});
}

export default Component;
