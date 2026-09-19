import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8p9k171u.css';
import '../../css/x/xx72yyb6l.css';
import '../../css/o/ovoprwbgx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8p9k171u"/><path class="xx72yyb6l"/><path class="ovoprwbgx"/>`,
		"fallback": "ion:ios-tv",
	});
}

export default Component;
