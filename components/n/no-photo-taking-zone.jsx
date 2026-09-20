import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rlxecy5gb.css';
import '../../css/a/al5367bds.css';
import '../../css/h/hcflj6-un.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rlxecy5gb"/><path class="al5367bds"/><path class="hcflj6-un"/></g>`,
		"fallback": "streamline-sharp:no-photo-taking-zone",
	});
}

export default Component;
