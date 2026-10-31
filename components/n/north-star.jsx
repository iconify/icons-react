import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/n/nl_elacjj.css';
import '../../css/y/y2pitt7iq.css';
import '../../css/e/eacle5s9s.css';
import '../../css/u/u0km1qbun.css';
import '../../css/a/a0o9nky4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="nl_elacjj"/><path class="y2pitt7iq"/><path class="eacle5s9s wm-k"/><path class="u0km1qbun wm-a"/><path class="a0o9nky4v wm-deco"/></g>`,
		"fallback": "withicons-kawaii:north-star",
	});
}

export default Component;
