import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anm5-5b-v.css';
import '../../css/v/vf3f05_0e.css';
import '../../css/q/qldxu1nsm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path transform="matrix(1.26652 0 0 1.26466 -1.313 -1.572)" class="anm5-5b-v"/><circle class="vf3f05_0e"/><path class="qldxu1nsm"/>`,
		"fallback": "catppuccin:rproj",
	});
}

export default Component;
