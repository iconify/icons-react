import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czhwh68px.css';
import '../../css/n/n4x3x3ysu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="czhwh68px"/><path class="n4x3x3ysu"/>`,
		"fallback": "famicons:watch-sharp",
	});
}

export default Component;
