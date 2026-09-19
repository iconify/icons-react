import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/g/gz8--lx8p.css';
import '../../css/m/mz340mupd.css';
import '../../css/y/yrx40bbij.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path clip-rule="evenodd" class="gz8--lx8p"/><path class="mz340mupd"/><path class="yrx40bbij"/></g>`,
		"fallback": "icon-park:up-c",
	});
}

export default Component;
