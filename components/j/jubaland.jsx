import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvdemeinh.css';
import '../../css/z/zu4nqpm5c.css';
import '../../css/m/mfzwz5b6g.css';
import '../../css/v/v24hg-b_g.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvdemeinh"/><path class="zu4nqpm5c"/><path class="mfzwz5b6g"/><path class="v24hg-b_g"/>`,
		"fallback": "tabler-flags:jubaland",
	});
}

export default Component;
