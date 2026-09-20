import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2clycb-g.css';
import '../../css/w/wpypx_dri.css';
import '../../css/f/fdhg8oy1z.css';
import '../../css/g/gsdiynbpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j2clycb-g"/><path class="wpypx_dri"/><path clip-rule="evenodd" class="fdhg8oy1z"/><path class="gsdiynbpb"/>`,
		"fallback": "qlementine-icons:items-tree-24",
	});
}

export default Component;
