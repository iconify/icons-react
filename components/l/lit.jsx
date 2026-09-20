import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdz_qi1ok.css';
import '../../css/m/mwyoejbys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdz_qi1ok"/><path clip-rule="evenodd" class="mwyoejbys"/>`,
		"fallback": "token:lit",
	});
}

export default Component;
