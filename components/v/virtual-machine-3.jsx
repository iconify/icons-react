import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/w/wr7ibjbvd.css';
import '../../css/a/ai2ml-bsx.css';
import '../../css/w/w1hfonltf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="wr7ibjbvd"/><path class="ai2ml-bsx"/><path class="w1hfonltf"/></g>`,
		"fallback": "streamline-cyber:virtual-machine-3",
	});
}

export default Component;
