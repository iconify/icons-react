import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of88hrgyb.css';
import '../../css/h/hcquu7bpt.css';
import '../../css/y/ys_j6cbby.css';
import '../../css/b/b99j4mbdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="of88hrgyb"/><path class="hcquu7bpt"/><path class="ys_j6cbby"/><path class="b99j4mbdr"/>`,
		"fallback": "fontisto:rails",
	});
}

export default Component;
