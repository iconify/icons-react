import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/q/qvdv6gb6z.css';
import '../../css/h/hylzlpb6h.css';
import '../../css/k/kaxh6uvgt.css';
import '../../css/p/p4qfs_7kk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="qvdv6gb6z"/><path class="hylzlpb6h"/><path class="kaxh6uvgt"/><path class="p4qfs_7kk"/></g>`,
		"fallback": "streamline-plump-color:recording-tape-1",
	});
}

export default Component;
