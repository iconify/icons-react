import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-jo9vf3p.css';
import '../../css/d/dsm-cgb4h.css';
import '../../css/f/foipgeybq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-jo9vf3p wm-k"/><path class="dsm-cgb4h wm-k"/><path class="foipgeybq wm-s"/>`,
		"fallback": "withicons-bauhaus:shield-off",
	});
}

export default Component;
