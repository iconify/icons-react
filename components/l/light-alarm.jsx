import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymxvme3fu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymxvme3fu"/>`,
		"fallback": "si-glyph:light-alarm",
	});
}

export default Component;
