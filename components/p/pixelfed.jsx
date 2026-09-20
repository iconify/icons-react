import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqy-zd.css';
import '../../css/o/osh3oc.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fade-to-1.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqy-zd"/><path class="osh3oc"/>`,
		"fallback": "line-md:pixelfed",
	});
}

export default Component;
