import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spr61w0uo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spr61w0uo"/>`,
		"fallback": "reicon:sort-down",
	});
}

export default Component;
