import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbb_qacmw.css';
import '../../css/o/ogxmpc7da.css';
import '../../css/x/xhzi8ovuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbb_qacmw"/><path class="ogxmpc7da"/><path class="xhzi8ovuc"/>`,
		"fallback": "withicons-bauhaus:puzzle-piece",
	});
}

export default Component;
