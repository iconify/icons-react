import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vykvzn64z.css';
import '../../css/e/em281wrxd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vykvzn64z"/><path class="em281wrxd"/>`,
		"fallback": "streamline-pixel:interface-essential-hammer-2",
	});
}

export default Component;
