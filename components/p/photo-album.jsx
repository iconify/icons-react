import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qseawcbxu.css';
import '../../css/v/v_f8rsa0h.css';
import '../../css/v/vwzrdlbul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qseawcbxu"/><circle class="v_f8rsa0h"/><path class="vwzrdlbul"/>`,
		"fallback": "bx:photo-album",
	});
}

export default Component;
