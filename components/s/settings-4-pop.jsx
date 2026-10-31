import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yzv02bb8d.css';
import '../../css/h/hcqlggr0s.css';
import '../../css/g/g6u5fqeds.css';
import '../../css/z/zfb55lbdw.css';
import '../../css/b/b9vdrkbbp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yzv02bb8d"/><path class="hcqlggr0s"/><path class="g6u5fqeds"/><path class="zfb55lbdw"/><path class="b9vdrkbbp"/></g>`,
		"fallback": "streamline-kameleon-color:settings-4-pop",
	});
}

export default Component;
