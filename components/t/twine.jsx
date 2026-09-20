import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a91r15bjt.css';
import '../../css/u/u50_rvyrl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a91r15bjt"/><path class="u50_rvyrl"/>`,
		"fallback": "material-icon-theme:twine",
	});
}

export default Component;
