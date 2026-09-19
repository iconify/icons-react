import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7eta4bwd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7eta4bwd"/>`,
		"fallback": "glyphs:sunset-1",
	});
}

export default Component;
