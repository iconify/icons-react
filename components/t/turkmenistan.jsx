import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avaz35vcl.css';
import '../../css/d/d6irxobcr.css';
import '../../css/s/s9f_vlb8b.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avaz35vcl"/><path class="d6irxobcr"/><path class="s9f_vlb8b"/>`,
		"fallback": "tabler-flags:turkmenistan",
	});
}

export default Component;
