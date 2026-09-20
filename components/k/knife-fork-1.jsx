import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-b-5jban.css';
import '../../css/q/q9k8bmnxn.css';
import '../../css/b/bpphhjblu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s-b-5jban"/><path class="q9k8bmnxn"/><path class="bpphhjblu"/>`,
		"fallback": "lineicons:knife-fork-1",
	});
}

export default Component;
