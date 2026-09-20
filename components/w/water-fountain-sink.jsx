import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwe-sk3re.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nwe-sk3re"/>`,
		"fallback": "streamline-freehand:water-fountain-sink",
	});
}

export default Component;
