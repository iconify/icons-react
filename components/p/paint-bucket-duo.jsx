import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxdbbfiis.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i66nlzbsu.css';
import '../../css/c/cai4gqkcy.css';
import '../../css/c/cu1zsc2zh.css';
import '../../css/l/lg3m63ztu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxdbbfiis secondary"/><g class="dt0cm9dhy primary"><path class="i66nlzbsu"/><path class="cai4gqkcy"/><path class="cu1zsc2zh"/><path class="lg3m63ztu"/></g>`,
		"fallback": "iconaut:paint-bucket-duo",
	});
}

export default Component;
