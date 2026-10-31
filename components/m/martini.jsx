import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/f/fn3l47d1f.css';
import '../../css/k/k7oyk-b2n.css';
import '../../css/j/jq54vwoda.css';
import '../../css/d/d5_gd2mux.css';
import '../../css/n/nnfke78sg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="fn3l47d1f"/><path class="k7oyk-b2n wm-shine"/><path class="jq54vwoda wm-k"/><path class="d5_gd2mux wm-a"/><path class="nnfke78sg wm-deco"/></g>`,
		"fallback": "withicons-kawaii:martini",
	});
}

export default Component;
