import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/r/rtbl7y.css';
import '../../css/c/c-6jkr.css';
import '../../css/y/y4wbml.css';
import '../../css/o/oy7p5c.css';
import '../../css/s/so-from-34.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew rtbl7y"/><path class="c-6jkr iw1iew y4wbml"/><path class="iw1iew oy7p5c y4wbml"/>`,
		"fallback": "line-md:volume-plus-filled",
	});
}

export default Component;
