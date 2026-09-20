import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/a/auswgj.css';
import '../../css/a/aunkjo.css';
import '../../css/s/so-from-40.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c auswgj"/><path class="a0m25c aunkjo"/>`,
		"fallback": "line-md:roundabout-left",
	});
}

export default Component;
