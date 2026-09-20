import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcw1c79qb.css';
import '../../css/b/beeg7e7hg.css';
import '../../css/f/fv-cmacjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gcw1c79qb"/><path class="beeg7e7hg"/><path class="fv-cmacjm"/>`,
		"fallback": "tdesign:save-filled",
	});
}

export default Component;
