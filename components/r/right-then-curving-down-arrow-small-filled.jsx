import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdpb0ccux.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdpb0ccux"/>`,
		"fallback": "dinkie-icons:right-then-curving-down-arrow-small-filled",
	});
}

export default Component;
