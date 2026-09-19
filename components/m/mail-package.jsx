import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/x/xj3srebta.css';
import '../../css/m/molrqu-4w.css';
import '../../css/a/am_cr08zz.css';
import '../../css/h/hwx6xebuu.css';
import '../../css/w/w2tjk_twr.css';
import '../../css/u/up9kw1bfd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="xj3srebta"/><path class="molrqu-4w"/><path class="am_cr08zz"/><path class="hwx6xebuu"/><path class="w2tjk_twr"/><path class="up9kw1bfd"/></g>`,
		"fallback": "icon-park:mail-package",
	});
}

export default Component;
