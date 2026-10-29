import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxsmvwbkk.css';
import '../../css/q/qb0s-jc0c.css';
import '../../css/q/q7hleknpx.css';
import '../../css/c/cbdewqb9y.css';
import '../../css/e/e23mhcctw.css';
import '../../css/q/qezhtdoug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxsmvwbkk wm-k"/><path class="qb0s-jc0c wm-a"/><path class="q7hleknpx wm-a"/><path class="cbdewqb9y wm-a"/><path class="e23mhcctw wm-k"/><path class="qezhtdoug wm-k"/>`,
		"fallback": "withicons-bauhaus:washing-machine",
	});
}

export default Component;
