import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp9136o6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pp9136o6w"/>`,
		"fallback": "reicon:setting2-filled",
	});
}

export default Component;
