import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/m/myyyvpbch.css';
import '../../css/z/zy6r9tbqu.css';
import '../../css/o/ozlgvzbky.css';
import '../../css/q/qdupd8ior.css';
import '../../css/y/yu1pdbp4f.css';
import '../../css/e/eka60mbfr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="myyyvpbch"/><path class="zy6r9tbqu"/><path class="ozlgvzbky"/><path class="qdupd8ior"/><path class="yu1pdbp4f"/><path class="eka60mbfr"/></g>`,
		"fallback": "icon-park:rice",
	});
}

export default Component;
