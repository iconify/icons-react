import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgn7bubwt.css';
import '../../css/u/u-3cpkh9t.css';
import '../../css/f/fog6w8bnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgn7bubwt"/><path class="u-3cpkh9t"/><path class="fog6w8bnu"/>`,
		"fallback": "solar:rows-3-bold",
	});
}

export default Component;
