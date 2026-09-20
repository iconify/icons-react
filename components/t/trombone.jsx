import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4u8pbwjc.css';
import '../../css/w/wunj99omd.css';
import '../../css/d/da_kaob3b.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/p/phf8kodsn.css';
import '../../css/w/wge7w9vjv.css';
import '../../css/n/n8w5o9bkf.css';
import '../../css/y/y4mkhlhab.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="x4u8pbwjc"><path class="wunj99omd"/><path class="da_kaob3b"/></g><g class="jn8qy4bru"><path class="phf8kodsn"/><path class="wge7w9vjv"/><path class="n8w5o9bkf"/></g><path class="y4mkhlhab"/>`,
		"fallback": "openmoji:trombone",
	});
}

export default Component;
