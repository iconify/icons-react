import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b82tnpazp.css';
import '../../css/u/u6jj-hn4u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b82tnpazp"/><path class="u6jj-hn4u"/>`,
		"fallback": "roentgen:needleleaved-tree-urban-tree-pot",
	});
}

export default Component;
