import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/g/gpuq2ebyg.css';
import '../../css/z/zl7sn3b2p.css';
import '../../css/u/ug6meybnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="gpuq2ebyg"/><path class="zl7sn3b2p"/><path class="ug6meybnp"/></g>`,
		"fallback": "streamline-cyber:pen-tool",
	});
}

export default Component;
