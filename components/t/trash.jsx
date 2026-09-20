import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ramklfbpo.css';
import '../../css/s/s2ay7ubwo.css';
import '../../css/k/k3_giy35l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ramklfbpo"/><path class="s2ay7ubwo"/><path class="k3_giy35l"/>`,
		"fallback": "prime:trash",
	});
}

export default Component;
