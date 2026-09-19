import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esey5xbxp.css';
import '../../css/a/a7dbpzb-n.css';
import '../../css/b/b83b6belz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esey5xbxp"/><path class="a7dbpzb-n"/><path class="b83b6belz"/>`,
		"fallback": "catppuccin:solid",
	});
}

export default Component;
