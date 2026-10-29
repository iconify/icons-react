import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkyewyb6v.css';
import '../../css/q/qc_ff9bmb.css';
import '../../css/j/j51cjnbqm.css';
import '../../css/y/yu9huobvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkyewyb6v wm-a"/><path class="qc_ff9bmb wm-k"/><path class="j51cjnbqm wm-k"/><path class="wm-k yu9huobvz"/>`,
		"fallback": "withicons-bauhaus:palm-tree",
	});
}

export default Component;
