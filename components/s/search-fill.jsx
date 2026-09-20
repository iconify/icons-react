import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfik9abes.css';
import '../../css/t/tgpfh5wzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfik9abes"/><path clip-rule="evenodd" class="tgpfh5wzi"/>`,
		"fallback": "si:search-fill",
	});
}

export default Component;
