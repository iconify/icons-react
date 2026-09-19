import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/v/vky4uxbno.css';
import '../../css/u/ue0lmc99t.css';
import '../../css/z/zzur1de1q.css';
import '../../css/c/c4u7coq1i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="vky4uxbno"/><path class="ue0lmc99t"/><rect class="zzur1de1q"/><path class="c4u7coq1i"/></g>`,
		"fallback": "icon-park:locking-laptop",
	});
}

export default Component;
