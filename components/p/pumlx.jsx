import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt4ttcc3i.css';
import '../../css/a/apfenqdzs.css';
import '../../css/b/bh92dr6rn.css';
import '../../css/k/ka7j10y1i.css';
import '../../css/f/f8mawnu_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt4ttcc3i"/><path class="apfenqdzs"/><path class="bh92dr6rn"/><path class="ka7j10y1i"/><path class="f8mawnu_e"/>`,
		"fallback": "token:pumlx",
	});
}

export default Component;
