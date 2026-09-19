import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlu_cd69f.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlu_cd69f"/>`,
		"fallback": "glyphs:pills",
	});
}

export default Component;
