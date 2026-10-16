import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzfltwb0i.css';
import '../../css/r/rmhq31bfl.css';
import '../../css/i/iyy4s4bbf.css';
import '../../css/n/n6xqm1b3f.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="yzfltwb0i"/><rect class="rmhq31bfl"/><path class="iyy4s4bbf"/><path class="n6xqm1b3f"/>`,
		"fallback": "thesvg-color:termix",
	});
}

export default Component;
