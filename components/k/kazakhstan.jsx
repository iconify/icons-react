import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je-ebn_6t.css';
import '../../css/d/demeb0pia.css';
import '../../css/l/lhdq9b2hk.css';
import '../../css/q/qi9ec6bnm.css';
import '../../css/i/i15h1ibuj.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="je-ebn_6t"/><path class="demeb0pia"/><path class="lhdq9b2hk"/><path class="qi9ec6bnm"/><path class="i15h1ibuj"/>`,
		"fallback": "tabler-flags:kazakhstan",
	});
}

export default Component;
