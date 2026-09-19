import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3bhmacip.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3bhmacip"/>`,
		"fallback": "vs:sex-male",
	});
}

export default Component;
