import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qftch_bhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qftch_bhk"/>`,
		"fallback": "thesvg-color:react-hook-form",
	});
}

export default Component;
