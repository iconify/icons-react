import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cvbiv5ecy.css';
import '../../css/n/nkd99mgmf.css';
import '../../css/o/olxh2rbbv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cvbiv5ecy"/><path class="nkd99mgmf"/><path class="olxh2rbbv"/></g>`,
		"fallback": "icon-park:remind",
	});
}

export default Component;
