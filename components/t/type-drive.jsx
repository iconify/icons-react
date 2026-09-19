import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/h5jjrmb9v.css';
import '../../css/w/wkvsy0uyb.css';
import '../../css/z/zk1ivsbbj.css';
import '../../css/g/goe5d4bmr.css';
import '../../css/e/edzp0ybfv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="h5jjrmb9v"/><path class="wkvsy0uyb"/><circle class="zk1ivsbbj"/><circle class="goe5d4bmr"/><path class="edzp0ybfv"/></g>`,
		"fallback": "icon-park-outline:type-drive",
	});
}

export default Component;
