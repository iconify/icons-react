import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jal0xub-l.css';
import '../../css/d/dkqfi4v-u.css';
import '../../css/x/xx3nnccgm.css';
import '../../css/t/tn36-92ow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jal0xub-l wm-s"/><path class="dkqfi4v-u wm-k"/><path class="wm-a xx3nnccgm"/><path class="tn36-92ow wm-k"/>`,
		"fallback": "withicons-bauhaus:siren",
	});
}

export default Component;
