import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt13r4bix.css';
import '../../css/g/gw7mb_bdb.css';
import '../../css/b/bnkx5bbkr.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lt13r4bix"/><path class="gw7mb_bdb"/><path class="bnkx5bbkr"/>`,
		"fallback": "openmoji:saxophone",
	});
}

export default Component;
