import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_-6axbrw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_-6axbrw"/>`,
		"fallback": "streamline:nature-ecology-volcano-eruption-erupt-mountain-volcano-lava-magma-explosion",
	});
}

export default Component;
