import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz152z8so.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sz152z8so"/>`,
		"fallback": "pinhead:music-note-with-optical-disc",
	});
}

export default Component;
