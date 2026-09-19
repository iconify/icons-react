import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/k/krfehbkwe.css';
import '../../css/w/wobtdmkua.css';
import '../../css/k/kut0iebfh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="krfehbkwe"/><path class="wobtdmkua"/><path class="kut0iebfh"/></g>`,
		"fallback": "icon-park:medical-files",
	});
}

export default Component;
