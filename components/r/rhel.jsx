import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2ymc9bdx.css';
import '../../css/q/qtjow1bxk.css';
import '../../css/w/wk9hbdc0v.css';
import '../../css/b/bcqvqyk5g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2ymc9bdx"/><path class="qtjow1bxk"/><path class="wk9hbdc0v"/><path class="bcqvqyk5g"/>`,
		"fallback": "selfhst:rhel",
	});
}

export default Component;
