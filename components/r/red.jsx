import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk9_68w6u.css';
import '../../css/b/bm337jbbl.css';
import '../../css/f/ff8xd2bsy.css';
import '../../css/f/f8vhwlbyu.css';
import '../../css/r/rt6j9wblv.css';

const viewBox = {"width":200,"height":200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk9_68w6u"/><path class="bm337jbbl"/><path class="ff8xd2bsy"/><path class="f8vhwlbyu"/><path class="rt6j9wblv"/>`,
		"fallback": "material-icon-theme:red",
	});
}

export default Component;
