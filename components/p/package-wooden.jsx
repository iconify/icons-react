import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/a/a3_ii9e6s.css';
import '../../css/q/q20sl4bij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="a3_ii9e6s"/><path class="q20sl4bij"/></g>`,
		"fallback": "streamline-cyber:package-wooden",
	});
}

export default Component;
