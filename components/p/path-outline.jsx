import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxf1d9frc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rxf1d9frc"/>`,
		"fallback": "glyphs:path-outline",
	});
}

export default Component;
