import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yb5w26egd.css';
import '../../css/k/khx4kzbyh.css';
import '../../css/b/bk45kcouj.css';
import '../../css/u/ua5929fxj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yb5w26egd"/><path class="khx4kzbyh"/><path class="bk45kcouj"/><path class="ua5929fxj"/>`,
		"fallback": "ion:ios-expand",
	});
}

export default Component;
