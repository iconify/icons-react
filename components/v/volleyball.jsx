import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8quyib2t.css';
import '../../css/k/kw4-qabzh.css';
import '../../css/t/tdwbu_b5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8quyib2t wm-a"/><path class="kw4-qabzh wm-a"/><path class="tdwbu_b5f wm-a"/>`,
		"fallback": "withicons-bauhaus:volleyball",
	});
}

export default Component;
