import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqbnd2bxc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gqbnd2bxc"/>`,
		"fallback": "pajamas:sidebar-right",
	});
}

export default Component;
