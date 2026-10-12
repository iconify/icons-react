import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz-ftvbge.css';
import '../../css/k/kespe5bzf.css';
import '../../css/a/aye8s_zkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz-ftvbge"/><path class="kespe5bzf"/><path class="aye8s_zkm"/>`,
		"fallback": "lucide-extended:layers-filled",
	});
}

export default Component;
