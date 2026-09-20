import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3rsgcczs.css';
import '../../css/g/ghc79-30g.css';
import '../../css/l/lxc3j5b5v.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3rsgcczs"/><path class="ghc79-30g"/><path class="lxc3j5b5v"/>`,
		"fallback": "thesvg-color:kiro",
	});
}

export default Component;
