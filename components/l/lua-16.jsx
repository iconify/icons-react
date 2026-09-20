import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qudowwo1l.css';
import '../../css/r/rvdw2qbco.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qudowwo1l"/><path class="rvdw2qbco"/>`,
		"fallback": "nonicons:lua-16",
	});
}

export default Component;
