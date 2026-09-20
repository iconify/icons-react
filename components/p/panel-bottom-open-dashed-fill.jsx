import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uf_5_z44w.css';
import '../../css/c/c-yqibcyj.css';
import '../../css/a/al3d8cbli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uf_5_z44w"/><path class="c-yqibcyj"/><path class="al3d8cbli"/></g>`,
		"fallback": "keyline-icons:panel-bottom-open-dashed-fill",
	});
}

export default Component;
