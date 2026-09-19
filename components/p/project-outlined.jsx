import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac2-8hbbw.css';
import '../../css/f/f0g9hjb6c.css';
import '../../css/l/l7s1i2bwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ac2-8hbbw"/><path class="f0g9hjb6c"/><path class="l7s1i2bwe"/>`,
		"fallback": "eos-icons:project-outlined",
	});
}

export default Component;
