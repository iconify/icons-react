import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzf_z6h6u.css';
import '../../css/n/ntcbpqbvi.css';
import '../../css/c/c8-d15b5e.css';
import '../../css/b/bo2b4ff_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-a wzf_z6h6u"/><path class="ntcbpqbvi wm-k"/><path class="c8-d15b5e wm-k"/><path class="bo2b4ff_v wm-a"/>`,
		"fallback": "withicons-bauhaus:train",
	});
}

export default Component;
