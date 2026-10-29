import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn2thbb_r.css';
import '../../css/p/pbr8cipxb.css';
import '../../css/c/cf7crkx6v.css';
import '../../css/u/udhws4j8w.css';
import '../../css/f/fs_353-hf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nn2thbb_r wm-k"/><path class="pbr8cipxb wm-k"/><path class="cf7crkx6v wm-a"/><path class="udhws4j8w wm-a"/><path class="fs_353-hf wm-s"/>`,
		"fallback": "withicons-bauhaus:repeat-1",
	});
}

export default Component;
