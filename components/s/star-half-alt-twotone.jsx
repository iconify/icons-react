import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aedcft.css';
import '../../css/a/a0m25c.css';
import '../../css/b/bsgi6p.css';
import '../../css/v/vwcgvo.css';
import '../../css/f/fill-to-0.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-from-34.css';
import '../../css/s/so-from-16.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aedcft"/><path class="a0m25c bsgi6p"/><path class="a0m25c vwcgvo"/>`,
		"fallback": "line-md:star-half-alt-twotone",
	});
}

export default Component;
