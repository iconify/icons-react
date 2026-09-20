import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/x_wywf9me.css';
import '../../css/p/pyzgxpkzp.css';
import '../../css/n/n7e0l3bmv.css';
import '../../css/a/a0qim0bok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="x_wywf9me"/><path class="pyzgxpkzp"/><path class="n7e0l3bmv"/><path class="a0qim0bok"/></g>`,
		"fallback": "streamline-ultimate:sd-card-sync",
	});
}

export default Component;
