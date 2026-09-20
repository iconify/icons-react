import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3fk1nbuy.css';
import '../../css/z/zdy8trbye.css';
import '../../css/v/vzp2p0bja.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3fk1nbuy"/><path class="zdy8trbye"/><path class="vzp2p0bja"/>`,
		"fallback": "streamline-pixel:interface-essential-cog-hand-give",
	});
}

export default Component;
