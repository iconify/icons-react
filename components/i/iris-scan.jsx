import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/u/urpvq8bwp.css';
import '../../css/g/g97li4b3d.css';
import '../../css/u/ufwkq_nkz.css';
import '../../css/n/n294jgk7w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="urpvq8bwp"/><path class="g97li4b3d"/><path class="ufwkq_nkz"/><path class="n294jgk7w"/></g>`,
		"fallback": "streamline-plump-color:iris-scan",
	});
}

export default Component;
