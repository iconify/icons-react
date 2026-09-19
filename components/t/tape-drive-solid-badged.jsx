import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpykv1bud.css';
import '../../css/o/o760gtbbr.css';
import '../../css/l/lmf0ecbhq.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpykv1bud"/><path class="o760gtbbr"/><circle class="lmf0ecbhq"/>`,
		"fallback": "clarity:tape-drive-solid-badged",
	});
}

export default Component;
