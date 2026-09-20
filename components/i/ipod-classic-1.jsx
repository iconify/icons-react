import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uu754cc5i.css';
import '../../css/p/pkhc0-9tu.css';
import '../../css/m/m2hqnn58t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="uu754cc5i"/><path class="pkhc0-9tu"/><path class="m2hqnn58t"/></g>`,
		"fallback": "streamline-cyber:ipod-classic-1",
	});
}

export default Component;
