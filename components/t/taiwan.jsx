import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/moccqs3jy.css';
import '../../css/j/jck5bgb1n.css';
import '../../css/a/alxt9kbde.css';
import '../../css/s/seckcuo1f.css';
import '../../css/m/mwkdnjw-x.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="moccqs3jy"/><path class="jck5bgb1n"/><path class="alxt9kbde"/><path class="seckcuo1f"/><path class="mwkdnjw-x"/>`,
		"fallback": "tabler-flags:taiwan",
	});
}

export default Component;
