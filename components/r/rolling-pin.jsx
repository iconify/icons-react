import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y845pe3tp.css';
import '../../css/n/nyqqef2cl.css';
import '../../css/n/n54qw7bnb.css';
import '../../css/l/l6bl47bbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y845pe3tp"/><path class="nyqqef2cl"/><path class="n54qw7bnb"/><path class="l6bl47bbf"/></g>`,
		"fallback": "streamline-cyber-color:rolling-pin",
	});
}

export default Component;
