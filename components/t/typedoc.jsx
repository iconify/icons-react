import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5q9y884s.css';
import '../../css/n/ncwam8blf.css';
import '../../css/c/cnm88kb6a.css';
import '../../css/b/bzav01b4o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5q9y884s"/><path class="ncwam8blf"/><path class="cnm88kb6a"/><path class="bzav01b4o"/>`,
		"fallback": "material-icon-theme:typedoc",
	});
}

export default Component;
