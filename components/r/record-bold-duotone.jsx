import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7ssc3b8h.css';
import '../../css/z/zo3cxx6gk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="i7ssc3b8h"/><path clip-rule="evenodd" class="zo3cxx6gk"/>`,
		"fallback": "solar:record-bold-duotone",
	});
}

export default Component;
