import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/n/n9peftvhw.css';
import '../../css/n/nieto3bph.css';
import '../../css/u/ufs2t2q3a.css';
import '../../css/g/g5rda80uc.css';
import '../../css/z/z1cxodlmd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="n9peftvhw"/><path class="nieto3bph"/><path class="ufs2t2q3a"/><path class="g5rda80uc"/><path class="z1cxodlmd"/></g>`,
		"fallback": "streamline-plump-color:recycle-bin",
	});
}

export default Component;
